import { React, useEffect } from 'react';

export const MatchSmallCard = () => {

    useEffect(
        () => {
            const fetchMatches = async () => {
                const response = await fetch('http://localhost:8080/team/Delhi%20Capitals');
                const data = await response.json();
                console.log(data);
            };
            fetchMatches();
        }
    );


  return (
    <div className="MatchSmallCard">
      <p>Match Small Card</p>
    </div>
  );
}

