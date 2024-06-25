import {
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Stack,
  Button,
} from "@mui/material";
import MainSection from "@/src/home/components/MainSection";

const Home = () => {
  return (
    <>
      <Container maxWidth={false}>
        <Stack
          spacing={"1.5rem"}
          marginTop={"20vh"}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://illustoon.com/photo/11772.png"
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
          <Button variant="contained">Contained</Button>
          <Typography variant="body2" color={"inherit"}>
            ¿No quieres ver esto?
          </Typography>
          <Typography variant="body2" color={"green"}>
            Saltar
          </Typography>
        </Stack>
      </Container>
    </>
  );
};

export default Home;
