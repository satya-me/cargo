import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { clearCreateBookingStatus, fileDelete, takeCargoBooking } from '../../../services/slices/VENDOR/VendorCargoBookingSlice';
import Loader from '../../../util/Loader';

const AddBooking = () => {
  // user
  const user = JSON.parse(window.localStorage.getItem("user"));
  const BASE_URL = process.env.REACT_APP_NODE_HOST;
  // calculateTotals function
  const calculateTotals = () => {
    let totalLength = 0;
    let totalWidth = 0;
    let totalHeight = 0;
    let totalWeight = 0;
    let chargeableWeight = 0;

    inputFields.forEach((inputField) => {
      const { Length, width, height, weight } = inputField;
      totalLength += parseFloat(Length) || 0;
      totalWidth += parseFloat(width) || 0;
      totalHeight += parseFloat(height) || 0;
      totalWeight += parseFloat(weight) || 0;

      const dimensions = [parseFloat(Length) || 0, parseFloat(width) || 0, parseFloat(height) || 0];
      chargeableWeight += Math.max(...dimensions) * parseFloat(weight) || 0;
    });

    return {
      totalLength,
      totalWidth,
      totalHeight,
      totalWeight,
      chargeableWeight
    };
  };

  const [inputFields, setInputFields] = useState([{
    Length: '',
    width: '',
    height: '',
    weight: '',
    count: '',
    isStockable: false,
    isTrunable: false,
    isBatteryIncluded: false
  }]);

  const [formData, setFormData] = useState({
    destination: "",
    departure_dest: "",
    shipment_date_time: "",
    flight: "",
    customer_name: "",
    customer_phone: "",
    customer_email: "",
    customer_address: "",
    product_details: [],
    _userID: user?.id,
    totalWeight: "",
    dimension: "",
    chargeableWeight: ""
  })

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { create_booking_stat, loading } = useSelector(state => state.vendorCargoBookingSlice);

  useEffect(() => {
    // Load input fields from local storage on component mount
    const storedInputFields = window.localStorage.getItem('inputFields');
    if (storedInputFields) {
      setInputFields(JSON.parse(storedInputFields));
    }
  }, []);


  useEffect(() => {
    // Update local storage when input fields change
    window.localStorage.setItem('inputFields', JSON.stringify(inputFields));
  }, [inputFields]);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleinputFieldChange = (index, field, value) => {
    setInputFields((prevFields) => {
      const newFields = [...prevFields];
      newFields[index] = {
        ...newFields[index],
        [field]: value
      };
      return newFields;
    });
  };


  const handleAddFields = () => {
    setInputFields([...inputFields, { Length: '', width: '', height: '', weight: '', count: 'total', isStockable: false, isTrunable: false, isBatteryIncluded: false }]);
  };


  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };


  const handleSubmit = (e) => {
    window.localStorage.removeItem("inputFields");
    e.preventDefault();
    const data = {
      ...formData,
      product_details: inputFields,
      totalWeight: (calculateTotals()?.totalWeight)?.toFixed(2),
      dimension: (calculateTotals()?.totalLength * calculateTotals()?.totalWidth * calculateTotals()?.totalHeight)?.toFixed(2),
      chargeableWeight: (calculateTotals()?.chargeableWeight)?.toFixed(2)
    };
    // console.log(data);
    dispatch(takeCargoBooking(data));
  };


  useEffect(() => {
    if (create_booking_stat?.status) {
      const filePath = BASE_URL + "/public/Download/" + create_booking_stat?.folder + "/" + create_booking_stat?.file_name?.replace(/\s/g, "");
      const fileName = create_booking_stat?.file_name.toLowerCase();

      fetch(filePath)
        .then(response => response.blob())
        .then(blob => {
          const blobUrl = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = blobUrl;
          link.download = fileName;
          link.click();
          window.URL.revokeObjectURL(blobUrl);
        })
        .catch(error => {
          console.error('Error downloading PDF:', error);
        });

      navigate('/viewbooking');

      setTimeout(() => {
        dispatch(fileDelete({ folder: create_booking_stat?.folder }))
      }, 10000);
    }
    return () => {
      dispatch(clearCreateBookingStatus());
    }
  }, [create_booking_stat, dispatch, navigate, BASE_URL])

  return (
    <>
      {/* Loader */}
      {loading && <Loader />}
      {/* <!-- Start right Content here --> */}
      {/* <!-- ============================================================== --> */}
      <div className="main-content">

        <div className="page-content">
          <div className="container-fluid">

            {/* <!-- start page title --> */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">Booking List Edit</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item"><Link to={`/${user?.type}`}>Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item active">View Booking List</li>
                    </ol>
                  </div>

                </div>
              </div>
            </div>
            {/* <!-- end page title --> */}

            <form action="" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-xl-12">
                  <div className="card mb-0">
                    <div className="m-3">
                      <div className="ml-auto float-end">

                        <Link to="/viewbooking"
                          className="btn btn-secondary btn-sm btn-rounded waves-effect waves-light"><i
                            className="dripicons-backspace me-1"></i> Back</Link>
                      </div>
                      <h4 className="card-title mb-2">Add Booking</h4>
                    </div>
                    <div className="card-body">

                      <div className="row">

                        {/* Select Destination */}
                        <div className="col-md-3">
                          <div className="mb-3">
                            <label htmlFor='destination'>Select Destination</label>
                            <select
                              className="form-select"
                              id='destination'
                              name='destination'
                              value={formData?.destination}
                              onChange={handleChange}
                            >
                              <option value="">Select...</option>
                              <option value="Chhatrapati Shivaji International Airport">Chhatrapati Shivaji International Airport</option>
                              <option value="Dabolim Airport">Dabolim Airport</option>
                              <option value="Netaji Subhash Chandra Bose International Airport">Netaji Subhash Chandra Bose International Airport</option>
                              <option value="Sri Guru Ram Dass Jee International Airport">Sri Guru Ram Dass Jee International Airport</option>
                              <option value="Indira Gandhi International Airport">Indira Gandhi International Airport</option>
                            </select>
                          </div>
                        </div>

                        {/* Select Departure Destination */}
                        <div className="col-md-3">
                          <div className="mb-3">
                            <label htmlFor='departure_dest'>Select Departure Destination</label>
                            <select
                              className="form-select"
                              id='departure_dest'
                              name='departure_dest'
                              value={formData?.departure_dest}
                              onChange={handleChange}
                            >
                              <option value="">Select...</option>
                              <option value="Chhatrapati Shivaji International Airport">Chhatrapati Shivaji International Airport</option>
                              <option value="Dabolim Airport">Dabolim Airport</option>
                              <option value="Netaji Subhash Chandra Bose International Airport">Netaji Subhash Chandra Bose International Airport</option>
                              <option value="Sri Guru Ram Dass Jee International Airport">Sri Guru Ram Dass Jee International Airport</option>
                              <option value="Indira Gandhi International Airport">Indira Gandhi International Airport</option>
                            </select>
                          </div>
                        </div>

                        {/* Select flight */}
                        <div className="col-md-3">
                          <div className="mb-3">
                            <label htmlFor='flight'>Select Flight</label>
                            <select
                              className="form-select"
                              id='flight'
                              name='flight'
                              value={formData?.flight}
                              onChange={handleChange}
                            >
                              <option value="">Select Flight...</option>
                              <option value="6E 377">6E 377</option>
                              <option value="9B 417">9B 417</option>
                              <option value="7C 815">7C 815</option>
                            </select>
                          </div>
                        </div>

                        {/* Shipment Date & Time  */}
                        <div className="col-md-3">
                          <div className="mb-3">
                            <label htmlFor='shipment_date_time'>Shipment Date & Time</label>
                            <input
                              type="datetime-local"
                              className="form-control"
                              id='shipment_date_time'
                              name='shipment_date_time'
                              value={formData?.shipment_date_time}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        {/* <div className="col-md-3">
                          <div className="mb-3">
                            <label>Price Paid</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div> */}

                      </div>
                    </div>

                  </div>
                </div>
                <div className="col-xl-12 mt-3">
                  <div className="card mb-0">
                    <div className="m-3">
                      <h4 className="card-title mb-2">Add Customer Details</h4>
                    </div>
                    <div className="card-body">
                      <div className="row">

                        {/* Customer Name */}
                        <div className="col-md-3">
                          <div className="mb-3">
                            <label htmlFor='customer_name'>Customer Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id='customer_name'
                              name='customer_name'
                              value={formData?.customer_name}
                              onChange={handleChange}
                              pattern="[A-Za-z\s]+"
                              title="Please enter only letters and spaces"
                              required
                            />
                          </div>
                        </div>

                        {/* Customer Phone */}
                        <div className="col-md-3">
                          <div className="mb-3">
                            <label htmlFor='customer_phone'>Customer Phone</label>
                            <input
                              type="text"
                              className="form-control"
                              id='customer_phone'
                              name='customer_phone'
                              value={formData?.customer_phone}
                              onChange={handleChange}
                              maxLength={10}
                              pattern="[0-9]{10}"
                              title="Please enter a 10-digit phone number"
                              required
                            />
                          </div>
                        </div>

                        {/* Customer Email */}
                        <div className="col-md-3">
                          <div className="mb-3">
                            <label htmlFor='customer_email'>Customer Email</label>
                            <input
                              type="email"
                              className="form-control"
                              id='customer_email'
                              name='customer_email'
                              value={formData?.customer_email}
                              onChange={handleChange}
                              // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                              title="Please enter a valid email address"
                              required
                            />
                          </div>
                        </div>

                        {/* Customer Full address */}
                        <div className="col-md-3">
                          <div className="mb-3">
                            <label htmlFor='customer_address'>Customer Full address</label>
                            <input
                              type="text"
                              className="form-control"
                              id='customer_address'
                              name='customer_address'
                              value={formData?.customer_address}
                              onChange={handleChange}
                              pattern="[\s\S]*"
                              title="Please enter a valid address"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Add Product Details */}
                <div className="col-xl-12 mt-3">
                  <div className="card">
                    <div className="m-3">
                      <h4 className="card-title mb-2">Add Product Details</h4>
                    </div>
                    <div className="card-body">
                      {/* <div className="animated-switch-container">
                        <input type="checkbox" className="size-chart-switch animated-switch-checkbox"
                          id="size-chart-switch" />
                        <label htmlFor="size-chart-switch" id="size-chart-switch-label"
                          className="animated-switch-label"><span>cm</span><span>inch</span></label>
                      </div> */}
                      {
                        inputFields?.map((inputField, index) => {
                          return (
                            <div className="row" id={`row-${index + 1}`} key={index}>
                              <div className="col-md-3">
                                <div className="row">

                                  {/* Length */}
                                  <div className="col-md-4">
                                    <label htmlFor={`Length${index}`}>Length(cm)</label>
                                    <div className="mb-3">
                                      <input
                                        id={`Length${index}`}
                                        type="text"
                                        className="form-control"
                                        placeholder="Length"
                                        value={inputField.Length}
                                        onChange={(e) => handleinputFieldChange(index, 'Length', e.target.value)}
                                        pattern="^\d+(\.\d+)?$"
                                        title="Please enter a number"
                                        required
                                      />
                                    </div>
                                  </div>

                                  {/* Width */}
                                  <div className="col-md-4">
                                    <label htmlFor={`Width${index}`}>Width(cm)</label>
                                    <div className="mb-3">
                                      <input
                                        id={`Width${index}`}
                                        type="text"
                                        className="form-control"
                                        placeholder="Width"
                                        value={inputField?.width}
                                        onChange={(e) => handleinputFieldChange(index, 'width', e.target.value)}
                                        pattern="^\d+(\.\d+)?$"
                                        title="Please enter a number"
                                        required
                                      />
                                    </div>
                                  </div>

                                  {/* Height */}
                                  <div className="col-md-4">
                                    <label htmlFor={`height${index}`}>Height(cm)</label>
                                    <div className="mb-3">
                                      <input
                                        id={`height${index}`}
                                        type="text"
                                        className="form-control"
                                        placeholder="Height"
                                        value={inputField?.height}
                                        onChange={(e) => handleinputFieldChange(index, 'height', e.target.value)}
                                        pattern="^\d+(\.\d+)?$"
                                        title="Please enter a number"
                                        required
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Weight */}
                              <div className="col-md-2">
                                <div className="mb-3">
                                  <label htmlFor={`weight${index}`}>Weight (Kg)</label>
                                  <input
                                    id={`weight${index}`}
                                    type="text"
                                    className="form-control"
                                    placeholder="Weight"
                                    value={inputField?.weight}
                                    onChange={(e) => handleinputFieldChange(index, 'weight', e.target.value)}
                                    pattern="^\d+(\.\d+)?$"
                                    title="Please enter a number"
                                    required
                                  />
                                </div>
                              </div>

                              {/* Weight Type */}
                              <div className="col-md-2">
                                <div>
                                  <label htmlFor={`flexRadioDefault${index}1`} className="form-label pro_form_label">Weight Type</label>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name={`flexRadioDefaultCount${index}`}
                                      id={`flexRadioDefault${index}1`}
                                      checked={inputField.count === 'total'}
                                      onChange={() => handleinputFieldChange(index, 'count', 'total')}
                                    />
                                    <label className="form-check-label" htmlFor={`flexRadioDefault${index}1`}>
                                      Total
                                    </label>
                                  </div>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name={`flexRadioDefaultCount${index}`}
                                      id={`flexRadioDefault${index}2`}
                                      checked={inputField.count === 'perItem'}
                                      onChange={() => handleinputFieldChange(index, 'count', 'perItem')}
                                    />
                                    <label className="form-check-label" htmlFor={`flexRadioDefault${index}2`}>
                                      Per Item
                                    </label>
                                  </div>
                                </div>
                              </div>

                              {/* Packing */}
                              <div className="col-md-2">
                                <div>
                                  <label htmlFor={`flexCheckDefault${index}`} className="form-label pro_form_label">Packing</label>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      // value=""
                                      id={`flexCheckDefault${index}`}
                                      checked={inputField.isStockable}
                                      onChange={(e) => handleinputFieldChange(index, 'isStockable', e.target.checked)}
                                    />
                                    <label className="form-check-label" htmlFor={`flexCheckDefault${index}`}>
                                      Stockable
                                    </label>
                                  </div>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      // value=""
                                      id={`flexCheckChecked${index}`}
                                      checked={inputField.isTrunable}
                                      onChange={(e) => handleinputFieldChange(index, 'isTrunable', e.target.checked)}
                                    />
                                    <label className="form-check-label" htmlFor={`flexCheckChecked${index}`}>
                                      Trunable
                                    </label>
                                  </div>
                                </div>
                              </div>

                              {/* Battery Include */}
                              <div className="col-md-2">
                                <div>
                                  <label htmlFor={`flexRadioDefault${index}3`} className="form-label pro_form_label">Battery Include</label>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name={`flexRadioDefaultBattery${index}`}
                                      id={`flexRadioDefault${index}3`}
                                      checked={inputField.isBatteryIncluded}
                                      onChange={() => handleinputFieldChange(index, 'isBatteryIncluded', true)}
                                    />
                                    <label className="form-check-label" htmlFor={`flexRadioDefault${index}3`}>
                                      Yes
                                    </label>
                                  </div>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name={`flexRadioDefaultBattery${index}`}
                                      id={`flexRadioDefault${index}4`}
                                      checked={!inputField.isBatteryIncluded}
                                      onChange={() => handleinputFieldChange(index, 'isBatteryIncluded', false)}
                                    />
                                    <label className="form-check-label" htmlFor={`flexRadioDefault${index}4`}>
                                      No
                                    </label>
                                  </div>
                                </div>
                              </div>

                              {/* Delete button */}
                              {index > 0 && (
                                <div className="col-md-1">
                                  <button type="button" onClick={() => handleRemoveFields(index)} className="remove">
                                    <i className="bx bx-trash fs-2"></i>
                                  </button>
                                </div>
                              )}
                            </div>
                          )
                        })
                      }

                      {/* Add product button */}
                      <button type='button' onClick={handleAddFields} className="btn text-primary fw-bold btn-light" id="addmore">+ Add another
                        Product</button>

                      <div className="row mt-4">

                        {/* totalWeight */}
                        <div className="col-md-2">
                          <div className="result_title">
                            <h5>Total Weight</h5>
                            <p>{calculateTotals()?.totalWeight} kg</p>
                          </div>
                        </div>

                        {/* totalLength */}
                        <div className="col-md-2">
                          <div className="result_title">
                            <h5>Dimension</h5>
                            <p>{calculateTotals()?.totalLength * calculateTotals()?.totalWidth * calculateTotals()?.totalHeight} cm<sup>3</sup></p>
                          </div>
                        </div>

                        {/* chargeableWeight */}
                        <div className="col-md-2">
                          <div className="result_title">
                            <h5>Chargeable Weight</h5>
                            <p>{calculateTotals()?.chargeableWeight} kg</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Booking */}
                <div className="col-md-2 mb-4">
                  <button className="btn btn-primary">Take Booking</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* <!-- end row --> */}

      </div>
      {/* <!-- container-fluid --> */}
    </>
  )
}

export default AddBooking