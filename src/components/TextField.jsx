import {
  FormControl, styled, TextField,
  InputLabel, MenuItem
} from "@mui/material";

const StyledInput = styled(TextField)(({ theme, variant }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiFilledInput-root': {
    backgroundColor: 'transparent'
  },
  '& .MuiFilledInput-root:hover': {
    backgroundColor: 'transparent'
  },
  '& .MuiFilledInput-root::before': {
    borderBottom: 'none !important',
    borderRadius: "8px !important",
  },
  '& .MuiFilledInput-root::after': {
    borderBottom: 'none !important',
    borderRadius: "8px !important",
  },
  '& .MuiInputBase-input': {
    borderRadius: "8px",
    position: 'relative',
    backgroundColor: variant !== 'standard' ? '#F3F6F9' : 'transparent',
    border: 'none',
    fontSize: 12,
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
  },
}));


const CustomTextField = (props) => {
  const {
    label,
    value,
    onChange,
    select,
    placeholder,
    variant = 'filled',
    options = []
  } = props;
  return(
    <FormControl variant="standard" fullWidth>
        {label && (
          <InputLabel
            shrink
            sx={{
              fontSize: '14px',
              fontWeight: 700,
              color: '#000'
            }}
          >
            {label}
          </InputLabel>
        )}
        <StyledInput
          select={select}
          variant={variant}
          fullWidth
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        >
          {select && options.length > 0 && options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              <span>{option.label}</span>
            </MenuItem>
          ))}
        </StyledInput>
    </FormControl>
  )
}

export default CustomTextField;