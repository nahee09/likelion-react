import { useId, useRef, useEffect } from 'react';
import { bool, string } from 'prop-types';
import { A11yHidden } from '@/components';
import classes from './FormInput.module.scss';

/* Component ---------------------------------------------------------------- */

export function FormInput({
  label,
  type,
  invisibleLabel,
  vertical,
  ...restProps
}) {
  const id = useId();
  const inputRef = useRef(null);
  const combineClassNames = `${classes.FormInput} ${
    vertical ? classes.FormInputVertical : ''
<<<<<<< HEAD
  } ${restProps.value.length > 0 ? classes.inputed : ''}`.trim();
=======
  } ${inputRef.current?.value?.length > 0 ? classes.inputed : ''}`.trim();

  useEffect(() => {
    const input = inputRef.current;
    const component = input.parentElement;

    const addInputedClassName = () => {
      component.classList.add(classes.inputed);
    };

    const removeInputedClassName = () => {
      component.classList.remove(classes.inputed);
    };

    input.addEventListener('input', (e) => {
      e.target.value.length > 0
        ? addInputedClassName()
        : removeInputedClassName();
    });
  });
>>>>>>> e3dabfc180839a4b015ec9f64f1c223a8d7cde27

  return (
    <div className={combineClassNames}>
      {renderLabel(id, label, invisibleLabel)}
      <input
        ref={inputRef}
        id={id}
        type={type}
        className={classes.input}
        {...restProps}
      />
    </div>
  );
}

/* Props -------------------------------------------------------------------- */

FormInput.defualtProps = {
  type: 'text',
  invisibleLabel: false,
  vertical: false,
  inputed: false,
};

FormInput.propTypes = {
  type: string,
  label: string.isRequired,
  invisibleLabel: bool,
  vertical: bool,
  inputed: bool,
};

/* Render Function ---------------------------------------------------------- */

function renderLabel(id, label, invisibleLabel) {
  return invisibleLabel ? (
    <A11yHidden as="label" htmlFor={id} className={classes.label}>
      {label}
    </A11yHidden>
  ) : (
    <label htmlFor={id} className={classes.label}>
      {label}
    </label>
  );
}
