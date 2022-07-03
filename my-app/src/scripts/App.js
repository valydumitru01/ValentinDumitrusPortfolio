import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

function App() {
  return (
    <>
    <FormGroup>
    <FormControlLabel control={<Switch defaultChecked />} label="Label" />
    <FormControlLabel disabled control={<Switch />} label="Disabled" />
    </FormGroup>
    </>
  );
}

export default App;
