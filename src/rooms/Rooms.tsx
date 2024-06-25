import {
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Input,
  useTheme,
  InputAdornment,
  Box,
} from "@mui/material";

const Login = () => {
  const theme = useTheme();
  return (
    <Container
      style={{
        color: theme.palette.primary.main,
      }}
    >
      <Stack
        spacing={"1.5rem"}
        marginTop={"20vh"}
        justifyContent="center"
        alignItems="center"
        color={"green"}
      >
        <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={
              <InputAdornment position="start">🔎</InputAdornment>
            }
          />
        </FormControl>

        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={
              <InputAdornment position="start">👤</InputAdornment>
            }
          />
        </FormControl>

        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={
              <InputAdornment position="start"> 📅 </InputAdornment>
            }
          />
        </FormControl>
      </Stack>
    </Container>
  );
};

export default Login;
