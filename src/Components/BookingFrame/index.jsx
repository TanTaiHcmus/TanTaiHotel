import React, { PureComponent } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./index.scss";
import { connect } from "react-redux";
import Moment from "../../Moment";
import SortDownIcon from "../../Images/sort-down.svg";
import SortUpIcon from "../../Images/sort-up.svg";
import {
  changeEndDate,
  changeGuests,
  changeNights,
  changeStartDate,
} from "./action";

class BookingFrame extends PureComponent {
  render() {
    const {
      className,
      startDate,
      endDate,
      guests,
      nights,
      onBooking,
      disabled,
      ...rest
    } = this.props;

    return (
      <div className={className ? className : ""}>
        <div className="booking-frame-container">
          <div className="item check-in">
            <div className="title">CHECK-IN</div>
            <div className="number date">{Moment.getDay(startDate)}</div>
            <div className="controller">
              <div className="month">{Moment.getMonth(startDate)}</div>
              <div className="year">{Moment.getYear(startDate)}</div>
            </div>
            <div className="date-picker">
              <DatePicker
                selected={startDate}
                minDate={Moment.getNow()}
                onChange={(date) => {
                  this.props.changeStartDateConnect(date);
                }}
                disabled={disabled}
              />
            </div>
          </div>

          <div className="item check-out">
            <div className="title">CHECK-OUT</div>
            <div className="number date">{Moment.getDay(endDate)}</div>
            <div className="controller">
              <div className="month">{Moment.getMonth(endDate)}</div>
              <div className="year">{Moment.getYear(endDate)}</div>
            </div>
            <div className="date-picker">
              <DatePicker
                selected={endDate}
                minDate={Moment.addDays(startDate, 1)}
                onChange={(date) => {
                  this.props.changeEndDateConnect(date);
                }}
                disabled={disabled}
              />
            </div>
          </div>

          <div className="item guest">
            <div className="title">GUESTS</div>
            <div className="number">{guests}</div>
            <div className="controller">
              <img
                src={SortUpIcon}
                alt="sort-up-icon"
                className="sort-icon"
                onClick={() => {
                  if (disabled) return;
                  this.props.changeGuestsConnect(guests - 1);
                }}
              />
              <img
                src={SortDownIcon}
                alt="sort-down-icon"
                className="sort-icon"
                onClick={() => {
                  if (disabled) return;
                  this.props.changeGuestsConnect(guests + 1);
                }}
              />
            </div>
          </div>
          <div className="item night">
            <div className="title">NIGHTS</div>
            <div className="number">{nights}</div>
            <div className="controller">
              <img
                src={SortUpIcon}
                alt="sort-up-icon"
                className="sort-icon"
                onClick={() => {
                  if (disabled) return;
                  this.props.changeNightsConnect(nights - 1);
                }}
              />
              <img
                src={SortDownIcon}
                alt="sort-down-icon"
                className="sort-icon"
                onClick={() => {
                  if (disabled) return;
                  this.props.changeNightsConnect(nights + 1);
                }}
              />
            </div>
          </div>
          {onBooking && (
            <div
              className="btn-booking"
              onClick={() => {
                onBooking();
              }}
            >
              BOOK NOW
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    startDate: state.booking.startDate,
    endDate: state.booking.endDate,
    guests: state.booking.guests,
    nights: state.booking.nights,
  };
};

const mapDispatchToProps = {
  changeStartDateConnect: changeStartDate,
  changeEndDateConnect: changeEndDate,
  changeGuestsConnect: changeGuests,
  changeNightsConnect: changeNights,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingFrame);
