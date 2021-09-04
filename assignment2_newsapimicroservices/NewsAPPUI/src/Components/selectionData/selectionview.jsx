import React, { useState } from 'react';


const SelectionView = (props) => {
    const [endPoint, setEndPoint] = useState('');
    const [type, setType] = useState('');
    const [countryCode, setCountryCode] = useState('');
    const [category, setCategory] = useState('');
    const [searchText, setSearchText] = useState('');
    const [pageSize, setPageSize] = useState(20);
    const [page, setPage] = useState(1);


    const handleFilter = (event) => {
        event.preventDefault()
        let filterData = {
            endPoint,
            type,
            category,
            countryCode,
            searchText,
            pageSize,
            page
        }
        props.filterDashboardData(filterData);
       
    }

    return (
        <div>
            <form className="row g-3" onSubmit={handleFilter}>
                <div className="col-md-6">
                    <label className="form-label">End Points</label>
                    <select className="form-select select-endpoint" aria-label="Default select example" onChange={e => setEndPoint(e.target.value)}>
                        <option defaultValue>Choose Endpoint..</option>
                        <option value="top-headlines">Top Headlines</option>
                        <option value="everything">Everything</option>
                        <option value="sources">Sources</option>
                    </select>
                </div>
                {
                    endPoint === 'top-headlines' || endPoint === 'sources' ? (
                        <div className="col-md-6">
                            <label className="form-label">Category/Country</label>
                            <select className="form-select select-category-country" aria-label="Default select example" onChange={e => setType(e.target.value)}>
                                <option defaultValue>Choose Category/Country..</option>
                                <option value="category">Category</option>
                                <option value="country">Country</option>
                                <option value="both">Both</option>
                            </select>
                        </div>
                    )
                        : ""
                }

                {
                    type === 'country' ? (
                        <div className="col-md-6">
                            <label className="form-label">Country</label>
                            <input type="text" className="form-control text-country" id="inputPassword4" placeholder="Enter country code: in, us, au,.." onChange={e => setCountryCode(e.target.value)} />
                        </div>
                    ) : ""

                }
                {
                    type === 'category' ? (
                        <div className="col-md-6">
                            <label className="form-label">Category</label>
                            <select className="form-select" aria-label="Default select example" onChange={e => setCategory(e.target.value)}>
                                <option defaultValue>Choose Category..</option>
                                <option value="business">Business</option>
                                <option value="entertainment">Entertainment</option>
                                <option value="general">General</option>
                                <option value="health">Health</option>
                                <option value="science">Science</option>
                                <option value="sports">Sports</option>
                                <option value="technology">Technology</option>
                            </select>
                        </div>) : ""
                }

                {
                    type === 'both' ? (
                        <div>
                            <div className="col-md-6">
                                <label className="form-label">Country</label>
                                <input type="text" className="form-control text-country" id="inputPassword4" placeholder="Enter country code: in, us, au,.." onChange={e => setCountryCode(e.target.value)} />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Category</label>
                                <select className="form-select select-category" aria-label="Default select example" onChange={e => setCategory(e.target.value)}>
                                    <option defaultValue>Choose Category..</option>
                                    <option value="business">Business</option>
                                    <option value="entertainment">Entertainment</option>
                                    <option value="general">General</option>
                                    <option value="health">Health</option>
                                    <option value="science">Science</option>
                                    <option value="sports">Sports</option>
                                    <option value="technology">Technology</option>
                                </select>
                            </div>
                        </div>
                    )
                        : ""}

                {
                    endPoint === 'everything' ? (
                        <div className="col-md-6">
                            <label className="form-label">Search Text</label>
                            <input type="text" className="form-control text-search" id="inputAddress2" placeholder="Enter value for 'q'" onChange={e => setSearchText(e.target.value)} />
                        </div>
                    ) : ''
                }

                <div className="col-md-6">
                    <label className="form-label">Page Size</label>
                    <input type="number" min='20' max='100' className="form-control text-page-size" id="inputCity" placeholder="E.g. 20, min:20 / max:100" onChange={e => setPageSize(e.target.value)} />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Page</label>
                    <input type="number" min='1' className="form-control text-page" id="inputAddress2" placeholder="E.g: 1, default:1" onChange={e => setPage(e.target.value)} />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary filter-btn">Filter</button>
                </div>
            </form>
        </div>

    );
};

export default SelectionView;