import { Box, Card, Typography } from "@mui/material";
import CustomButton from "../../components/CustomButton";
import constants from "../../../utils/constants";
import survey from "../../../assets/icons/survey.png";
import "./styles/FeedbackForm.scss";

interface IFeedbackForm {
  title: string;
  submitted: number;
  viewed: number;
  date: string;
}

const FeedbackForm = ({ title, submitted, viewed, date }: IFeedbackForm) => (
  <Card className="feedback-form-container">
    <Box className="feedback-form-header">
      <Box component="img" alt="header-img" src={survey}></Box>
    </Box>

    <Box className="feedback-form-body">
      <Typography component="h1">{title}</Typography>
      <Box mt={2}>
        <Box className="feedback-form-content">
          <Typography component="h2">{constants.Submitted}</Typography>
          <Typography component="h2">{submitted}</Typography>
        </Box>
        <Box className="feedback-form-content">
          <Typography component="h2">{constants.Viewed}</Typography>
          <Typography component="h2">{viewed}</Typography>
        </Box>
        <Box className="feedback-form-content">
          <Typography component="h2">{constants.DatePublished}</Typography>
          <Typography component="h2">{date}</Typography>
        </Box>
      </Box>
    </Box>

    <Box className="feedback-form-footer">
      <Box className="btn-group-1">
        <CustomButton
          id="btn"
          name="VIEW SUBMISSION"
          variant="contained"
          color="secondary"
          onClick={() => {}}
        />
      </Box>
      <Box className="btn-group-2">
        <CustomButton
          id="btn"
          name="Edit"
          variant="contained"
          color="success"
          onClick={() => {}}
        />
        <Box mx={1}></Box>
        <CustomButton
          id="btn"
          name="VIEW"
          variant="contained"
          color="primary"
          onClick={() => {}}
        />
      </Box>
    </Box>
  </Card>
);

export default FeedbackForm;
