import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../Button';
import { styled } from '../../stitches.config';
import { lighten } from '../../utils';

const Item = ({ item }) => {
  const [isActive, setIsActive] = useState(false);

  const StyledItem = styled('li', {
    backgroundColor: lighten(item.lvlColor, 40),
    marginBottom: '1rem',

    '&:last-of-type': {
      marginBottom: '0'
    },

    h4: {
      padding: '1rem',
    },

    p: {
      backgroundColor: lighten(item.lvlColor, 80),
      padding: '1rem',
      marginBottom: '0 !important'
    }
  })

  const navigate = useNavigate();

  return (
    <StyledItem>
      <h4 className="title" onClick={() => setIsActive(!isActive)}>{item.lvlName} {isActive ? '-' : '+'}</h4>
      {isActive && (
        <p>
          {item.description}

          {
            item.lvlNum < 9 && (
              <>
                <br /><br />
                <Button
                  onClick={() => navigate(`/levels/${item.lvlNum}`)}
                >
                  Train at Level {item.lvlNum + 1}: {item.lvlName}
                </Button>
              </>
            )
          }
        </p>
      )}

    </StyledItem>
  )
}

Item.propTypes = {
  item: PropTypes.object.isRequired
}

const Accordion = ({ list }) => {
  const StyledAccordion = styled('ul', {
    display: 'block !important',
    listStyleType: 'none',
    width: '100%',

    h4: {
      cursor: 'pointer'
    }
  });

  return (
    <StyledAccordion>
      {list.map((item, i) => <Item key={`${i}-${item.title}`} item={item} />)}
    </StyledAccordion>
  )
}

export default Accordion;

Accordion.propTypes = {
  list: PropTypes.array.isRequired
}