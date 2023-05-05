import "./SingleProject.css";
import viewIcon from "../assets/media/223930.png";
import gitIcon from "../assets/media/25231.png";
import { Avatar, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

// refactoring to utilize MUI styling instead of doing everything from scratch
const SingleProject = ({ projects, title }) => {
    console.log(projects);

    return (
        <>
            <Grid container spacing={2}>
                <div className="project-header">
                    <Grid xs ={12}>
                            <div className="page-title">{title}</div>
                    </Grid>
                    <Grid xs ={12}>
                            <div className="contact-bar">
                                <span className="phone">+1 (626) 864-0110</span>
                                <span className="email">johnmabie94@gmail.com</span>
                                <span className="city">Tulsa, Oklahoma</span>
                            </div>
                    </Grid>
                    <Grid xs={12}>
                            <div className="project-intro">
                                <div className="text-box text-project">
                                    <div id="box5">
                                        <h2>Here are some projects I have worked on, either solo or as part of a group:</h2>
                                    </div>
                                </div>
                            </div>
                    </Grid>
                </div>
                <div className="project-grid">
                    {projects.map((project) => {
                        return (
                            <Grid xs={6}>
                                    <Card sx={{ maxWidth: 600 }}>
                                        <CardMedia
                                            sx={{ height: 200 }}
                                            image={ project.screenshot }
                                            title={ project.title }/>
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

export default SingleProject;
