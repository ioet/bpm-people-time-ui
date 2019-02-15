/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import CancelIcon from '@material-ui/icons/Cancel';
import BpmSelectMultipleStyles from './BpmSelectMultipleStyles';

const mapListIntoSelect = (list) => {
  const items = [];
  Object.keys(list)
    .forEach((key) => {
      const item = list[key];
      items.push(
        {
          value: item.id,
          label: item.name,
        },
      );
    });
  return items;
};

function NoOptionsMessage(props) {
  const { selectProps, children } = props;
  return (
    <Typography
      color="textSecondary"
      className={selectProps.classes.noOptionsMessage}
    >
      {children}
    </Typography>
  );
}

NoOptionsMessage.propTypes = {
  selectProps: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired,
};

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

inputComponent.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

function Control(props) {
  const {
    innerRef, selectProps, innerProps, children,
  } = props;
  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: selectProps.classes.input,
          inputRef: innerRef,
          children,
          ...innerProps,
        },
      }}
      {...selectProps.textFieldProps}
    />
  );
}

Control.propTypes = {
  innerRef: PropTypes.func.isRequired,
  selectProps: PropTypes.object.isRequired,
  innerProps: PropTypes.object.isRequired,
  children: PropTypes.array.isRequired,
};

function Option(props) {
  const {
    isFocused, isSelected, innerProps, children,
  } = props;
  return (
    <MenuItem
      selected={isFocused}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400,
      }}
      {...innerProps}
    >
      {children}
    </MenuItem>
  );
}

Option.propTypes = {
  isFocused: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired,
  innerProps: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired,
};

function Placeholder(props) {
  const { selectProps, children } = props;
  return (
    <Typography
      color="textSecondary"
      className={selectProps.classes.placeholder}
    >
      {children}
    </Typography>
  );
}

Placeholder.propTypes = {
  selectProps: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired,
};

function ValueContainer(props) {
  const { selectProps, children } = props;
  return (
    <div className={selectProps.classes.valueContainer}>
      {children}
    </div>
  );
}

ValueContainer.propTypes = {
  selectProps: PropTypes.object.isRequired,
  children: PropTypes.array.isRequired,
};

function MultiValue(props) {
  const {
    children, selectProps, isFocused, removeProps,
  } = props;
  return (
    <Chip
      tabIndex={-1}
      label={children}
      className={classNames(selectProps.classes.chip, {
        [selectProps.classes.chipFocused]: isFocused,
      })}
      onDelete={removeProps.onClick}
      deleteIcon={<CancelIcon {...removeProps} />}
    />
  );
}

MultiValue.propTypes = {
  children: PropTypes.string.isRequired,
  selectProps: PropTypes.object.isRequired,
  isFocused: PropTypes.bool.isRequired,
  removeProps: PropTypes.object.isRequired,
};

function Menu(props) {
  const { selectProps, innerProps, children } = props;
  return (
    <Paper square className={selectProps.classes.paper} {...innerProps}>
      {children}
    </Paper>
  );
}

Menu.propTypes = {
  selectProps: PropTypes.object.isRequired,
  innerProps: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
};

const components = {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  Placeholder,
  ValueContainer,
};

const BpmSelectMultiple = (props) => {
  const {
    classes, theme, error, itemList, selectedItems, onSelectionChange, selectLabel,
  } = props;

  const selectStyles = {
    input: base => ({
      ...base,
      color: theme.palette.text.primary,
      '& input': {
        font: 'inherit',
      },
    }),
  };

  return (
    <div className={classes.root}>
      <Select
        classes={classes}
        styles={selectStyles}
        textFieldProps={{
          label: selectLabel,
          InputLabelProps: {
            shrink: true,
          },
        }}
        value={selectedItems}
        options={mapListIntoSelect(itemList)}
        components={components}
        onChange={onSelectionChange}
        placeholder={selectLabel}
        error={error}
        isMulti
      />
    </div>
  );
};

BpmSelectMultiple.defaultProps = {
  error: false,
  selectedItems: [],
};

BpmSelectMultiple.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  error: PropTypes.bool,
  itemList: PropTypes.object.isRequired,
  selectedItems: PropTypes.array,
  selectLabel: PropTypes.string.isRequired,
  onSelectionChange: PropTypes.func.isRequired,
};

export default withStyles(BpmSelectMultipleStyles, { withTheme: true })(BpmSelectMultiple);
