import { useState } from 'react';
import './header.css';
import { FaBed, FaPlane, FaTaxi, FaCar } from 'react-icons/fa';
import { MdPersonAdd } from 'react-icons/md';
import { BiCalendar } from 'react-icons/bi';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file


const Header = ({ type }) => {
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 1,
        room: 1,
    });

    return (
        <div className='header'>
            <div className={
                type === "list" ? "headerContainer listMode" : "headerContainer"
            }
            >
                <div className="headerList">
                    <div className="headerListItem active">
                        <FaBed />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FaPlane />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FaCar />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FaBed />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FaTaxi />
                        <span>Airport taxis</span>
                    </div>
                </div>
                {type !== "list" &&
                    <>
                        <h1 className="headerTitle">
                            A lifetime of discounts? It's Genius.
                        </h1>
                        <p className="headerDesc">
                            Get rewarded for your travels  unlock instant savings of 10% or
                            more with a free FlashBooks account.
                        </p>
                        <button className="headerBtn"
                        >
                            Sign in / Register
                        </button>
                        <div className="headerSearch"
                        >
                            <div className="headerSearchItem"
                            >
                                <FaBed className='headerIcon' />

                                <input type="text"
                                    placeholder='where are you going?'
                                    className="headerSearchInput" />

                            </div>

                            <div className="headerSearchItem"
                            >
                                <BiCalendar className='headerIcon' />
                                <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'
                                >
                                    {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}
                                </span>
                                {openDate && <DateRange editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    className="date" />}

                            </div>

                            <div className="headerSearchItem"
                            >
                                <MdPersonAdd className='headerIcon' />
                                <span className='headerSearchText'
                                    onClick={() => setOpenOptions(!openOptions)}>
                                    {`${options.adult} adult · ${options.children} children · ${options.room} room`}
                                </span>
                                {openOptions && <div className="options">
                                    <div className="optionItem">
                                        <span className="optionText">
                                            Adult
                                        </span>
                                        <div className="optionCounter">
                                            <button
                                                disabled={options.adult <= 1}
                                                className="optionCounterButton"
                                                onClick={() => handleOption("adult", "d")}
                                            >
                                                -
                                            </button>
                                            <span className="optionCounterNumber">
                                                {options.adult}
                                            </span>
                                            <button
                                                className="optionCounterButton"
                                                onClick={() => handleOption("adult", "i")}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="optionText">Children</span>
                                        <div className="optionCounter">
                                            <button
                                                disabled={options.children <= 0}
                                                className="optionCounterButton"
                                                onClick={() => handleOption("children", "d")}
                                            >
                                                -
                                            </button>
                                            <span className="optionCounterNumber">
                                                {options.children}
                                            </span>
                                            <button
                                                className="optionCounterButton"
                                                onClick={() => handleOption("children", "i")}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="optionText">Room</span>
                                        <div className="optionCounter">
                                            <button
                                                disabled={options.room <= 1}
                                                className="optionCounterButton"
                                                onClick={() => handleOption("room", "d")}
                                            >
                                                -
                                            </button>
                                            <span className="optionCounterNumber">
                                                {options.room}
                                            </span>
                                            <button
                                                className="optionCounterButton"
                                                onClick={() => handleOption("room", "i")}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                </div>}
                            </div>
                            <div className='headerSearchItem'>
                                <button className="headerBtn"
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </>}
            </div>
        </div>
    );
};

export default Header;