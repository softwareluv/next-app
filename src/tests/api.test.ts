import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import searchiTunes from "../api";
import { SearchiTunes } from "../Redux/actions/SearchActions";
import { SearchDispatchTypes } from "../Redux/actions/SearchActionTypes";
import { RootStore } from "../Redux/store";


test("search returns 10 items", async () => {
    const records = await searchiTunes("Mike", 10, 0);
    expect(records.data.results.length).toEqual(10);
});
