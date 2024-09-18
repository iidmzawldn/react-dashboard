import "chart.js/auto";
import { Bar, Doughnut, Line, Radar } from "react-chartjs-2";
import sourceData from "../data/sourceData.json";

const Home = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2,
 };

  return (
    <>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Home Page</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active">Home</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <div className="card card-primary card-outline">
                  <div className="card-header">
                    <h5 className="m-0">Chart 1</h5>
                  </div>
                  <div className="card-body">
                    <div className="chart-container">
                      <Bar
                        data={{
                          labels: sourceData.map((data) => data.label),
                          datasets: [
                            {
                              label: "Count",
                              data: sourceData.map((data) => data.value),
                              backgroundColor: [
                                "rgba(201, 104, 104, 0.8)",
                                "rgba(250, 223, 161, 0.8)",
                                "rgba(126, 172, 181, 0.8)",
                              ],
                              borderRadius: 5,
                            },
                          ],
                          options : {options}
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card card-primary card-outline">
                  <div className="card-header">
                    <h5 className="m-0">Chart 2</h5>
                  </div>
                  <div className="card-body">
                    <div className="chart-container">
                      <Line
                        data={{
                          labels: sourceData.map((data) => data.label),
                          datasets: [
                            {
                              label: "Count",
                              data: sourceData.map((data) => data.value),
                              backgroundColor: [
                                "rgba(201, 104, 104, 0.8)",
                                "rgba(250, 223, 161, 0.8)",
                                "rgba(126, 172, 181, 0.8)",
                              ],
                              borderRadius: 5,
                            },
                          ],
                          options : {options}
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card card-primary card-outline">
                  <div className="card-header">
                    <h5 className="m-0">Chart 2</h5>
                  </div>
                  <div className="card-body">
                    <div className="chart-container">
                      <Doughnut
                        data={{
                          labels: sourceData.map((data) => data.label),
                          datasets: [
                            {
                              label: "Count",
                              data: sourceData.map((data) => data.value),
                              backgroundColor: [
                                "rgba(201, 104, 104, 0.8)",
                                "rgba(250, 223, 161, 0.8)",
                                "rgba(126, 172, 181, 0.8)",
                              ],
                              borderRadius: 5,
                            },
                          ],
                          options : {options}
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card card-primary card-outline">
                  <div className="card-header">
                    <h5 className="m-0">Chart 2</h5>
                  </div>
                  <div className="card-body">
                    <div className="chart-container">
                      <Radar
                        data={{
                          labels: sourceData.map((data) => data.label),
                          datasets: [
                            {
                              label: "Count",
                              data: sourceData.map((data) => data.value),
                              backgroundColor: [
                                "rgba(201, 104, 104, 0.8)",
                                "rgba(250, 223, 161, 0.8)",
                                "rgba(126, 172, 181, 0.8)",
                              ],
                              borderRadius: 5,
                            },
                          ],
                          options : {options}
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
