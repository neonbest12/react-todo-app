import moment from 'moment';
import classnames from 'classnames';
import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.props.type === 'date' && this.props.initialValue ? moment(this.props.initialValue) : null,
      calendarFocused: false,
    };
  }

  onDateChange = (name, date) => {
    if (date && date._d) {
      const changedDate = new Date(date._d).toISOString();
      const [dateOnly] = changedDate.split('T');

      this.setState(() => ({ date }));

      this.props.onInputFieldChange(name, dateOnly);
    }
  };

  render() {
    const { labelText, required, placeholder, error, disabled, type, id, name } = this.props;

    let inputView = (
      <input
        id={id}
        name={name}
        type="text"
        placeholder={placeholder}
        className={classnames('w-100', { [`lf-input--disabled`]: disabled }, { [`lf-input--error`]: error })}
        onChange={this.props.onChange}
        required={required ? true : false}
        disabled={disabled}
        onBlur={this.props.onBlur}
        defaultValue={this.props.initialValue}
      />
    );

    if (type && type === 'password') {
      inputView = (
        <input
          id={id}
          name={name}
          type="password"
          placeholder={placeholder}
          className={classnames('w-100', { [`lf-input--disabled`]: disabled }, { [`lf-input--error`]: error })}
          onChange={this.props.onChange}
          required={required ? true : false}
          disabled={disabled}
          onBlur={this.props.onBlur}
          defaultValue={this.props.initialValue}
        />
      );
    }

    return (
      <div className="w-100 ">
        <div className="d-flex p-2">
          <label htmlFor={labelText} className="w-25">
            {labelText}
            {required && <span> * </span>}
          </label>
          <div className="w-75">{inputView}</div>
        </div>
        {error && <p className="p-2 text-danger">{error}</p>}
      </div>
    );
  }
}

export default Input;
