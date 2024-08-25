import { Box, Grid } from "@mui/material";
import NewForm from "./components/NewForm";
import FeedbackForm from "./components/FeedbackForm";

const forms = [
  {
    id: "delivery",
    title: "Delivery",
    submitted: 10,
    viewed: 55,
    date: new Date().toDateString(),
  },
  {
    id: "quality",
    title: "Product Quality",
    submitted: 300,
    viewed: 100,
    date: new Date().toDateString(),
  },
  {
    id: "quality2",
    title: "Product Quality",
    submitted: 300,
    viewed: 100,
    date: new Date().toDateString(),
  },
  {
    id: "quality3",
    title: "Product Quality",
    submitted: 300,
    viewed: 100,
    date: new Date().toDateString(),
  },
  {
    id: "quality4",
    title: "Product Quality",
    submitted: 300,
    viewed: 100,
    date: new Date().toDateString(),
  },
  {
    id: "quality5",
    title: "Product Quality",
    submitted: 300,
    viewed: 100,
    date: new Date().toDateString(),
  },
  {
    id: "quality6",
    title: "Product Quality",
    submitted: 300,
    viewed: 100,
    date: new Date().toDateString(),
  },
];

const Dashboard = () => (
  <Box m={2}>
    <Grid container spacing={2}>
      <Grid item key="add" xl={3} lg={4} md={6} sm={12} xs={12}>
        <NewForm />
      </Grid>
      {forms?.map(({ id, title, submitted, viewed, date }) => (
        <Grid item key={id} xl={3} lg={4} md={6} sm={12} xs={12}>
          <FeedbackForm
            title={title}
            submitted={submitted}
            viewed={viewed}
            date={date}
          />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Dashboard;
