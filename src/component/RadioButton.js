import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButton() {
  const [value, setValue] = React.useState('Active');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl>
       
      <RadioGroup
       row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="Active" control={<Radio />} label="Active" />
        <FormControlLabel value="Inactive" control={<Radio />} label="Inactive" />
      </RadioGroup>
    </FormControl>
  );
}
