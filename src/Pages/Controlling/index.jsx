import React from "react";
import gambar1 from "../../Assets/images/ilus/gambar1.png";
import icon6 from "../../Assets/images/icon (6).png";
import { getPH } from "../../redux/actions/getPh";
import { getNutrition } from "../../redux/actions/getNutrition";
import { getWaterTemp } from "../../redux/actions/getWaterTemp";
import { getWaterHeight } from "../../redux/actions/getWaterHeight";
import { useSelector, useDispatch } from "react-redux";

const Controlling = () => {
  const dispatch = useDispatch();
  const ph = useSelector((state) => state.ph_sensor.data);
  const nutrition = useSelector((state) => state.nutrition_sensor.data);
  const water_temp = useSelector((state) => state.water_temp_sensor.data);
  const water_height = useSelector((state) => state.water_height_sensor.data);
  console.log("ph", ph);
  React.useEffect(() => {
    setTimeout(() => {
      dispatch(getPH());
      dispatch(getNutrition());
      dispatch(getWaterTemp());
      dispatch(getWaterHeight());
    }, 1000);
  }, [getPH]);

  return (
    <div className="mt-5">
      <img
        src={gambar1}
        width="400"
        height="400"
        class="rounded mx-auto d-block mt-2"
        alt="..."
      />

      <h1 class="text-center h1">Controlling Panel</h1>
      <div class="pl-12">
        <div class="container">
          <div class="row mt-5 justify-content-between">
            <div class="col-4">
              <h1 class="h1 text-start"></h1>
            </div>
            <div class="row justify-content-md-center">
              <br />
              <div class="col-lg-6 mb-3">
                <div class="cardi text-center border-light">
                  <img alt="W3Schools" src={icon6} width="25%" height="25%" />

                  <div class="card-body">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Choose plants</option>
                      <option value="1">Kangkung</option>
                      <option value="2">Pakcoy</option>
                      <option value="3">Selada</option>
                    </select>
                    <br />
                    <a href="calender.html">
                      <button class="button button2">Start planting</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="p-3">
            <div class="row justify-content-center mt-5">
              <div class="card-deck">
                <div class="col-lg-6 mb-3">
                  <div
                    class="cardi text-center border-light "
                    style={{ width: "100%" }}
                  >
                    <br />
                    <div class="card-body">
                      <div class="cardalem">
                        <div class="p-1">
                          <h5 class="h4">
                            Volume Air{" "}
                            {/* <input
                              type="checkbox"
                              checked
                              data-toggle="toggle"
                              data-onstyle="dark"
                            /> */}
                          </h5>
                        </div>
                      </div>
                      <br />
                      <br />
                      <div class="p-3">
                        <form>
                          <div class="form-group">
                            <label class="h5">Your Current Water Volume</label>
                            <input
                              type="text"
                              class="form-control text-center"
                              // value={water_height[0].data}
                              readonly
                            />
                          </div>
                          <div class="form-group">
                            <label class="h5">Set Your Water Volume</label>
                            <input type="text" class="form-control" />
                          </div>
                          <br />
                          <button
                            type="submit"
                            class="btn btn-primary"
                            style={{ backgroundColor: "rgb(24, 58, 100)" }}
                          >
                            OK
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <br />

                <div class="col-lg-6 mb-3">
                  <div
                    class="cardi text-center border-light"
                    style={{ width: "100%" }}
                  >
                    <br />
                    <div class="card-body">
                      <div class="cardalem">
                        <div class="p-1">
                          <h5 class="h4">
                            Ph Air{" "}
                            {/* <input
                              type="checkbox"
                              checked
                              data-toggle="toggle"
                              data-onstyle="dark"
                            /> */}
                          </h5>
                        </div>
                      </div>
                      <br />
                      <br />
                      <div class="">
                        <form>
                          <div class="form-group">
                            <label class="h5">Your Current Water Ph</label>
                            <input
                              type="text"
                              class="form-control text-center"
                              // value={ph[0].data}
                              readonly
                            />
                          </div>
                          <div class="form-group">
                            <label class="h5">Set Your Water Ph</label>
                            <input type="text" class="form-control" />
                            <div class="row">
                              <div class="col">
                                <a
                                  href=""
                                  type=""
                                  class="btn btn-primary"
                                  placeholder="Ph UP"
                                  style={{
                                    backgroundColor: "rgb(24, 58, 100)",
                                  }}
                                >
                                  OK
                                </a>
                              </div>
                              {/* <div class="col">
                                <a
                                  href=""
                                  type=""
                                  class="btn btn-primary"
                                  placeholder="Ph UP"
                                  style={{
                                    backgroundColor: "rgb(24, 58, 100)",
                                  }}
                                >
                                  Ph Down
                                </a>
                              </div> */}
                            </div>
                          </div>
                          <br />
                          <br />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row justify-content-center">
              <div class="card-deck">
                <div class="col-lg-6 mb-3">
                  <div
                    class="cardi text-center border-light"
                    style={{ width: "100%" }}
                  >
                    <br />
                    <div class="card-body">
                      <div class="cardalem">
                        <div class="p-1">
                          <h5 class="h4">
                            Nutrition{" "}
                            {/* <input
                              type="checkbox"
                              checked
                              data-toggle="toggle"
                              data-onstyle="dark"
                            /> */}
                          </h5>
                        </div>
                      </div>
                      <br />
                      <br />
                      <div class="p-4">
                        <form>
                          <div class="form-group">
                            <label class="h5">Your Current Nutrition</label>
                            <input
                              type="text"
                              class="form-control text-center"
                              // value={nutrition[0].data}
                              readonly
                            />
                          </div>
                          <div class="form-group">
                            <label class="h5">Set Your Nutrition</label>
                            <input type="text" class="form-control" />
                          </div>
                          <button
                            type="submit"
                            class="btn btn-primary"
                            style={{ backgroundColor: "rgb(24, 58, 100)" }}
                          >
                            OK
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div class="col-lg-6 mb-3">
                  <div
                    class="cardi text-center border-light"
                    style={{ width: "100%" }}
                  >
                    <br />
                    <div class="card-body">
                      <div class="cardalem">
                        <div class="p-1">
                          <h5 class="h4">
                            UV Light{" "}
                            {/* <input
                              type="checkbox"
                              checked
                              data-toggle="toggle"
                              data-onstyle="dark"
                            /> */}
                          </h5>
                        </div>
                      </div>
                      <br />
                      <br />
                      <div class="p-4">
                        <form>
                          <div class="form-group">
                            <label class="h5">Your Current UV Light</label>
                            <input
                              type="text"
                              class="form-control text-center"
                              value="11"
                              readonly
                            />
                          </div>
                          <div class="form-group">
                            <label class="h5">Set Your UV Light</label>
                            <div class="row">
                              <div class="col">
                                <a
                                  href=""
                                  type=""
                                  class="btn btn-primary"
                                  placeholder="Ph UP"
                                  style={{
                                    backgroundColor: "rgb(24, 58, 100)",
                                  }}
                                >
                                  Turn On
                                </a>
                              </div>
                              <div class="col">
                                <a
                                  href=""
                                  type=""
                                  class="btn btn-primary"
                                  placeholder="Ph UP"
                                  style={{
                                    backgroundColor: "rgb(24, 58, 100)",
                                  }}
                                >
                                  Turn Off
                                </a>
                              </div>
                            </div>
                          </div>
                          <br />
                          <br />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Controlling;
