import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { 
	Grid, Box, Paper, TextField, Button,
	Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText
} from '@material-ui/core';

const ContactMap = ({centerPosition, markerPosition, locationText}) => (
	(typeof window !== 'undefined') && 
		<MapContainer
			center={ centerPosition }
			zoom={12}
			scrollWheelZoom={false}
			style={{ height: '100%', minHeight: '250px' }}
		>
			<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={ markerPosition }>
				<Popup><Box maxWidth='160px'>{ locationText }</Box></Popup>
			</Marker>
		</MapContainer>
);

const StyledTextField = ({name, type, label, rows, onChange}) => <TextField
	fullWidth
	size='small'
	variant='outlined'
	color='secondary'
	id={name}
	name={name}
	label={label}
	type={type}
	multiline={rows > 1}
	rows={rows ? rows : 0}
	onChange={onChange}
/>;

const MessageSentConfirmation = ({ open, handleClose, ok }) => <Dialog
		open={ open }
		onClose={ handleClose }
		aria-labelledby="alert-dialog-title"
		aria-describedby="alert-dialog-description"
	>
	<DialogTitle id="alert-dialog-title">{ 
		ok ? 'message sent!' : 'bummer... failed to send message' 
	}</DialogTitle>
	<DialogContent>
		<DialogContentText id="alert-dialog-description">
			{ ok ? 'thank you for talking to ginster :)' : <span>
				maybe a network error? <br/>anyways you can also directly email 
				<a href='mailto:contact@ginsterrific.com'>contact@ginsterrific.com</a>
			</span> }
		</DialogContentText>
	</DialogContent>
	<DialogActions>
	<Button onClick={ handleClose } color="secondary">
		{ ok? 'my pleasure' : 'gotcha' }
	</Button>
	</DialogActions>
</Dialog>;

class ContactForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: false,
			email: false,
			message: false,
			dialogOpen: false,
			mailSent: false
		}
	}

	onInputChange(evt) {
		let newState = {};
		newState[evt.target.id] = !!evt.target.value;
		this.setState(newState);
	}

	handleDialogClose() { 
		this.setState({ dialogOpen: false }); 
	}

	onSubmit(evt) {
		evt.preventDefault();
		const form = evt.target;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();
		xhr.open(form.method, form.action);
		xhr.setRequestHeader("Accept", "application/json");
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				form.reset();
				this.setState({ dialogOpen: true, mailSent: true }); 
			} else {
				this.setState({ dialogOpen: true, mailSent: false }); 
			}
		};
		xhr.send(data);
	}

	render() {		
		return (
			<React.Fragment>
			<form
				onSubmit={this.onSubmit.bind(this)}
				action="https://formspree.io/f/mvovnlny"
				method="POST"
				style={{ padding: '1rem', marginBottom: 0 }}
			>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={4}>
						<StyledTextField
							name='name'
							type='text'
							label='your name' 
							onChange={this.onInputChange.bind(this)}
						/>
					</Grid>
					<Grid item xs={12} sm={8}>
						<StyledTextField
							name='email'
							label='your email address'
							type='email'
							onChange={this.onInputChange.bind(this)}
						/>
					</Grid>
					<Grid item xs={12}>
						<StyledTextField
							name='message'
							label='tell me something'
							type='text'
							rows={5}
							onChange={this.onInputChange.bind(this)}
						/>
					</Grid>
					<Grid item xs={12}>
						<Button
							fullWidth
							variant='contained'
							type='submit'
							disabled={ !(this.state.name && this.state.email && this.state.message) }
							color='secondary'
							style={{textTransform: 'lowercase'}}
						>
								send me a message
						</Button>
					</Grid>
				</Grid>
			</form>
			<MessageSentConfirmation 
				open={this.state.dialogOpen} 
				ok={this.state.mailSent} 
				handleClose={this.handleDialogClose.bind(this)} 
			/>
			</React.Fragment>
		);
	}
}

const Contact = ({mt}) => {
	return (
		<Box mt={mt}>
			<h3>find me</h3>
			<Paper>
				<Grid container>
					<Grid item xs={12} md={4}>
						<ContactMap
							centerPosition={[38.89789339749001, -77.03652979993382]} // white house
							markerPosition={[38.903351660372074, -77.06028996026154]} // us news
							locationText={
								<span>somewhere near georgetown cupcakes.<br/>
								actually i'm not here now but i'll be back after covid</span>
							}
						/>
					</Grid>
					<Grid item xs={12} md={8}>
						<ContactForm />
					</Grid>
				</Grid>
			</Paper>
		</Box>
	);
};

export default Contact;