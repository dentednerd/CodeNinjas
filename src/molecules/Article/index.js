import React from "react";
import PropTypes from 'prop-types';
import { styled } from '../../stitches.config';
import Heading from '../Heading';
import { lighten } from "../../utils";

const Article = ({ color, hasAvatar, title, subtitle, children }) => {
  if (!title || !children) return null;

  const StyledArticle = styled('article', {
    backgroundColor: lighten(color, 40),
    padding: '1rem',
    borderRadius: '1rem',
    marginBottom: '1rem',
    textAlign: 'left',

    'section.info': {
      marginTop: '1rem',
      backgroundColor: lighten(color, 100),
      padding: '1rem',
      borderRadius: '1rem',

      ul: {
        display: 'grid',
        placeItems: 'center',
        gap: '1rem',
        listStyleType: 'none',
        marginTop: '1rem'
      },

      '@media(min-width: 768px)': {
        ul: {
          gridTemplateColumns: 'repeat(3, 1fr)',
        }
      }
    }
  });

  return (
    <StyledArticle>
      <Heading color={color} hasAvatar={hasAvatar} title={title} subtitle={subtitle} />
      <section className="info">
        {children}
      </section>
    </StyledArticle>
  );
}

export default Article;

Article.defaultProps = {
  hasAvatar: false
}

Article.propTypes = {
  hasAvatar: PropTypes.bool,
  color: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]).isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}