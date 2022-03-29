import React from 'react';
import styled from 'styled-components';

function CardDetail() {
    const Footers = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-left:4rem;
    padding-right:4rem;

    .faint{
        color:gray;
    }

    `
  return (
    <Footers>
        <div className="first">
            <h2>80k</h2>
            <p className='faint'>Followers</p>
        </div>

        <div className="second">
            <h2>803k</h2>
            <p className='faint'>Likes</p>
        </div>

        <div className="third">
            <h2>1.4k</h2>
            <p className='faint'>photos</p>
        </div>
    </Footers>
  )
}

export default CardDetail