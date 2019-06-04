import React from 'react';
import { Link } from 'react-router-dom';
import "../InfoCard/InfoCard.css";

class InfoSheet extends React.Component {
  state = {
    character: {},
  };

  componentDidMount() {
    fetch(`https://swapi.co/api/people/${this.props.match.params.id}/`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log('data results:', data);
        this.setState({ character: data });
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  render() {
    const character = this.state.character;
    return (
      <div className="InfoCard">
      <h3><Link to="/">Home</Link></h3>
        <div className="InfoCard Name">
          {character.name}
        </div>
        <div className="InfoCard Container">
          <div className="InfoCard Container FieldTitles">
            GENDER: <br />
            SKIN COLOR: <br />
            EYE COLOR: <br />
            HAIR COLOR: <br />
            HEIGHT: <br />
            MASS: <br />
            BIRTH YEAR: <br />
          </div>
          <div className="InfoCard Container Fields">
            {character.gender} <br />
            {character.skin_color} <br />
            {character.eye_color} <br />
            {character.hair_color} <br />
            {character.height} <br />
            {character.mass} <br />
            {character.birth_year} <br /> 
          </div>
        </div>
      </div>
    )
  }
}

export default InfoSheet;
