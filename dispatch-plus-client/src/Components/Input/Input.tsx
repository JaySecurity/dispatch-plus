import React, { useState } from 'react';
import {
  Container,
  ErrorTag,
  Input,
  TextArea,
  Label,
  ShowIcon,
} from './Input.styles';

const StyledInput = (props) => {
  const {
    id,
    name,
    value,
    errors,
    placeholder,
    type,
    disabled,
    autoComplete,
    onChange,
    showIcon,
    togglePassword,
    showPassword,
    rows,
  } = props;

  const [focus, setFocus] = useState(false);

  const handleFocus = () => {
    setFocus((prev) => !prev);
  };

  if (type === 'textarea')
    return (
      <Container width={props.width} margin={props.margin}>
        <ShowIcon
          showIcon={showIcon}
          onClick={togglePassword}
          showPassword={showPassword}
        />
        <TextArea
          type={type}
          id={id}
          name={name}
          onFocus={handleFocus}
          onBlur={handleFocus}
          onChange={onChange}
          value={value}
          errors={errors}
          focus={focus}
          disabled={disabled}
          autoComplete={autoComplete}
          rows={rows}
        />
        <Label
          value={value}
          focus={focus}
          errors={errors}
          htmlFor={id}
          className='label'
        >
          {placeholder}
        </Label>
        {/* display list of all errors */}
        {errors ? <ErrorTag>{errors}</ErrorTag> : null}
      </Container>
    );
  else
    return (
      <Container width={props.width} margin={props.margin}>
        <ShowIcon
          showIcon={showIcon}
          onClick={togglePassword}
          showPassword={showPassword}
        />
        <Input
          type={type}
          id={id}
          name={name}
          onFocus={handleFocus}
          onBlur={handleFocus}
          onChange={onChange}
          value={value}
          errors={errors}
          focus={focus}
          disabled={disabled}
          autoComplete={autoComplete}
        />
        <Label
          value={value}
          focus={focus}
          errors={errors}
          htmlFor={id}
          className='label'
        >
          {placeholder}
        </Label>
        {/* display list of all errors */}
        {errors ? <ErrorTag>{errors}</ErrorTag> : null}
      </Container>
    );
};

export default StyledInput;
