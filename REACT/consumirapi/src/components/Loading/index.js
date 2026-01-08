/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { ThreeDot } from 'react-loading-indicators';

import { Container } from './styled';

export default function Loading({ isLoading }) {
  if (!isLoading) return <></>;
  return (
    <Container>
      <div />
      <section>
        <ThreeDot color={['#7f052a', '#b0073a', '#e1094a', '#f62765']} />
      </section>
    </Container>
  );
}

Loading.defaultProps = {
  isLoading: false,
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};
