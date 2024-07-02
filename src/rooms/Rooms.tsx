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
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

import Item from "@mui/material/Stack";

import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

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
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Password</InputLabel>
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

        <Button variant="contained">BUSCAR</Button>
      </Stack>

      <Stack direction="row" useFlexGap flexWrap="wrap" marginTop={"10vh"}>
        <Typography variant="h5" color={"inherit"}>
          Visto anteriormente
        </Typography>
      </Stack>

      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
        marginTop={"20vh"}
        justifyContent="center"
        alignItems="center"
        color={"green"}
      >
        <Item>
          {" "}
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="data:image/jpeg;base64,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"
              title="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
              ></Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>
        </Item>

        <Item>
          {" "}
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://cf.bstatic.com/xdata/images/hotel/max1024x768/258961262.jpg?k=95d09ec3b7933d3aa39d119cbf9fcf3970ea9df6e6c75d7b01903f2f4bfd79c6&o=&hp=1"
              title="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
              ></Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>
        </Item>
      </Stack>

      <Stack direction="row" useFlexGap flexWrap="wrap" marginTop={"10vh"}>
        <Typography variant="h5" color={"inherit"}>
          Sitios cercanos
        </Typography>
      </Stack>

      <Stack
        direction="row"
        useFlexGap
        flexWrap="wrap"
        marginTop={"20vh"}
        justifyContent="center"
        alignItems="center"
        color={"green"}
      >
        {" "}
        <Card sx={{ maxWidth: 720 }}>
          <CardMedia
            sx={{ height: 300 }}
            image="https://c.pxhere.com/photos/e0/84/building_lights_skyline_architecture_cityscape_city_urban_travel-1026108.jpg!d"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div"></Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </Container>
  );
};

export default Login;
