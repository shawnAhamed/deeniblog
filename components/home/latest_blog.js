import styles from '../../styles/Home.module.css';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Image from 'next/image';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import React from "react";
import Link from 'next/link'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        border:'none',
        boxShadow:'none',
        marginTop:20,
        padding:0,
        backgroundColor:'#FAFAFA',
        borderRadius:'0',
    },
    title:{
      paddingTop:0,
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
        padding:0,
        paddingLeft:16
    },
    cover: {
        width: 151,
    },

}));

export default function LetestBLog(props) {
    const articledata=props.article

    const classes = useStyles();
    return (
        <>
            <Box display="flex" flexDirection="row-reverse" p={1} m={1}>
                <Button variant="outlined" className={styles.button_view_all} >
                    View All
                </Button>
            </Box>

            {
                articledata && articledata.length && articledata.map((data,i)=>{
                    return(
                        <Card className={classes.root} key={i}>
                            <CardMedia>
                                <Image
                                    src={data.image}
                                    alt="blog_image"
                                    width={110}
                                    height={90}
                                />
                            </CardMedia>
                            <div className={classes.details}>
                                <CardContent className={classes.content}>
                                    <Link href={`/article/${data.slug}`}><a>
                                    <Typography component="h5" variant="h5" className={classes.title}>
                                        {data.title}
                                    </Typography>
                                    </a></Link>
                                    <Typography variant="body2">
                                        {data.category}
                                    </Typography>
                                </CardContent>
                            </div>

                        </Card>

                    )
                })

            }


        </>
    );
}
