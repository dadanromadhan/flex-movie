import { Container, Col, Row, Card, Image } from "react-bootstrap";
import { useEffect, useState } from "react"
import "../App.css"
import axios from "axios"

const Superhero= () => {
  const [movies, setMovies] = useState ([])
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASEURL}/tv/top_rated`, {
      params: {
        api_key: process.env.REACT_APP_APIKEY
      }
    }).then((response)=>{
      setMovies(response.data.results)
    })
  }, [])
  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 50) : text}
        <br />
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...  Read More" : "   Show Less"}
        </span>
      </p>
    );
  };
    return(
        <div className="trending"  id="superhero"> 
    <Container>
        <br />
            <h1 className="text-white mt-4">Trending TV Show</h1>
        <br />
        <Row>
          {movies.map((result, index) =>{
            return(
              <Col md={4} className="movieWrapper" key={index}>
              <Card className="bg-dark text-white movieImage">
        <Image src={`${process.env.REACT_APP_BASEIMGURL}/${result.poster_path}`} alt="Card image" className="imgWrapper"/>
          <Card.Title className="text-center p-2 m-1">{result.title}</Card.Title>
          <Card.Text className="text-left p-2 m-1">
          <ReadMore>
            {result.overview}
          </ReadMore>
          </Card.Text>
          <Card.Text className="text-left p-2 m-1">First On Air: {result.first_air_date}</Card.Text>
          </Card>
              </Col>
            )
          })}
        </Row>
    </Container>
      </div>
    )
}
export default Superhero