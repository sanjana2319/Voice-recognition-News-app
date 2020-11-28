import React from 'react';
import NewsCard from '../NewsCard/NewsCard'
import Topography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';
import Grid from '@material-ui/core/Grid';
import useStyles from "./styles.js";
//{Grid, Grow, Topography}
const infoCards = [
    { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
    { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
    { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
    { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
  ];

const NewsCards = ({ articles }) => {
    const classes = useStyles();

    if(!articles.length) {
        return(
            <Grow in>
               <Grid className = {classes.container} container alignItems= 'stretch' spacing={3}>
                   {infoCards.map((infoCard) => (
                      <Grid item xs={12} sm={6} md={4} lg={3} className = {classes.infoCard}>
                      <div className = {classes.card} style = {{backgroundColor: infoCard.color}}>
                   <Topography varient = "h5">{infoCard.title}</Topography>
                   {infoCard.info ? (<Topography varient = "h6">
                    <strong>
                        {infoCard.title.split(" ")[2]}:
                   </strong>
                   <br />
                   {infoCard.info}
                   </Topography>) : null }
                   <Topography varient= "h6">Try saying: <br /><i>{infoCard.text}</i></Topography>
                      </div>
                      </Grid> 
                   ))}
               </Grid>
            </Grow>
        )
    }
    return(
        <Grow in>
            <Grid className = {classes.container} container alignItems= 'stretch' spacing={3}>
            {articles.map((article, i) => (
                <Grid item xs={12} sm ={6} md={4} lg={4} style = {{display: "flex"}}>
                     <NewsCard article = {article} i = {i}/>
                </Grid>
                 
             ))}
            </Grid>
        </Grow>
        
    )
}

export default NewsCards;