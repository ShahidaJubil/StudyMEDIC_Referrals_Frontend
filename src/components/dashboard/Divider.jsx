import { styled } from '@mui/system';
import Divider from '@mui/material/Divider';

const ThickDivider = styled(Divider)(({ theme }) => ({
  backgroundColor: 'black',
  height: '1px',
  margin:'5px'
}));

export default ThickDivider;
