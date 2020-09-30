import React from 'react';

const CrabForm = (props) => {
    const {
        inputs,
        errors,
        handleInputChange,
        handleSubmit,
        submitValue,
    } = props;

    return (
        <form className="col-5 mx-auto" onSubmit={handleSubmit}>
            <div className="form-group row">
                <label
                    className="col-sm-3 col-form-label text-left"
                    htmlFor="name"
                >
                    Name:
                </label>
                <div class="col-sm-9">
                    <input
                        type="text"
                        name="name"
                        value={inputs.name}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="ex/ Han Solo"
                    />
                </div>
                <span className="text-danger">
                    {errors.name.message ? errors.name.message : ''}
                </span>
            </div>
            <div className="form-group row">
                <label
                    className="col-sm-3 col-form-label text-left"
                    htmlFor="spaceShip"
                >
                    Space Ship:
                </label>
                <div className="col-sm-9">
                    <input
                        type="text"
                        name="spaceShip"
                        value={inputs.spaceShip}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="ex/ Millennium Falcon"
                    />
                </div>
                <span className="text-danger">
                    {errors.name.message ? errors.name.message : ''}
                </span>
            </div>
            <div className="form-group row">
                <label
                    className="col-sm-3 col-form-label text-left"
                    htmlFor="weaponOne"
                >
                    Weapon One:
                </label>
                <div className="col-sm-9">
                    <input
                        type="text"
                        name="weaponOne"
                        value={inputs.weaponOne}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="(optional)"
                    />
                </div>
            </div>
            <div className="form-group row">
                <label
                    className="col-sm-3 col-form-label text-left"
                    htmlFor="weaponTwo"
                >
                    Weapon Two:
                </label>
                <div className="col-sm-9">
                    <input
                        type="text"
                        name="weaponTwo"
                        value={inputs.weaponTwo}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="(optional)"
                    />
                </div>
            </div>
            <div className="form-group row">
                <label
                    className="col-sm-3 col-form-label text-left"
                    htmlFor="weaponThree"
                >
                    Weapon Three:
                </label>
                <div className="col-sm-9">
                    <input
                        type="text"
                        name="weaponThree"
                        value={inputs.weaponThree}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="(optional)"
                    />
                </div>
            </div>
            <input
                type="submit"
                value={submitValue}
                className="btn btn-warning my-5"
            />
        </form>
    );
};

export default CrabForm;
