import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

JobFilterForm.defaultProps = {
  onSubmit: null,
};

function JobFilterForm(props) {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const typingTimeoutRef = useRef(null);

  function handleSearchTermChange(e) {
    const value = e.target.value;
    setSearchTerm(value);

    if (!onSubmit) {
      return;
    }

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      const formValue = {
        searchTerm: value,
      };
      onSubmit(formValue);
    }, 300);
  }

  return (
    <form>
      <input
        className="rounded-md my-2 pl-2 py-1"
        type="text"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
    </form>
  );
}

JobFilterForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default JobFilterForm;
