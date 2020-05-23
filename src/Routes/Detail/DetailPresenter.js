import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DetailPrestenter = ({ result, loading, error }) => null;

DetailPrestenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default DetailPrestenter;
