import "./SingleProject.css";
import viewIcon from "../assets/media/223930.png";
import gitIcon from "../assets/media/25231.png";
import { Avatar, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
// import { projectData } from "../data/db";
// import testImage from '../assets/media/results-page.png';

// refactoring to utilize MUI styling instead of doing everything from scratch
const SingleProject = ({ projectData, title }) => {
    console.log(projectData);

    return (
        <>
            <Grid container spacing={2} margin={0}>
                <div className="project-header">
                    <Grid xs ={12} direction={"row"}>
                            <div className="page-title">{title}</div>
                    </Grid>
                    <Grid xs ={12} direction={"row"}>
                            <div className="contact-bar">
                                <span className="phone">+1 (626) 864-0110</span>
                                <span className="email">johnmabie94@gmail.com</span>
                                <span className="city">Tulsa, Oklahoma</span>
                            </div>
                    </Grid>
                </div>
                <div className="project-grid">
                    {projectData.map((project) => {
                        return (
                            <Grid item xs={6}>
                                <Card sx={{ maxWidth: 1000 }}>
                                    <CardMedia
                                        sx={{ height: 200 }}
                                        image={ project.screenshot }
                                        title={ project.title }
                                        component="img"/>
                                    <CardContent>
                                        <Typography variant="h5" component="div">
                                            { project.title }
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            { project.description }
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button href={project.url} size="small" startIcon={<Avatar src={viewIcon}/>}>View</Button>
                                        <Button href={project.github} size="small" startIcon={<Avatar src={gitIcon}/>}>GitHub</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        );
                    })}
                </div>
            </Grid>
        </>
    );
};

// 

export default SingleProject;
