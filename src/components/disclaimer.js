import React from 'react';
import Box from '@material-ui/core/Box';

const Disclaimer = ({py}) => (
	<Box py={py} fontSize='0.75rem'>
		<b>disclaimer:</b> ginsterrific.com and the author give no guarantee and accept no responsibility
		or liability of the accuracy or the completeness of the materials and information contained.
		opinions are my own and do not necessarily reflect the views of my employer or any of my affiliations.
	</Box>
);

export default Disclaimer;