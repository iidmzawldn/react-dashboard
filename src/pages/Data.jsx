import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import sourceData from "../data/kunjunganData.json";

const Data = () => {
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
                <h1 className="m-0">Data Page</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active">Data</li>
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
                    <h5 className="m-0">Data</h5>
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
                          options: { options },
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card card-primary card-outline">
                  <div className="card-header">
                    <h5 className="m-0">Tabel</h5>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>Label</th>
                            <th>Value</th>
                          </tr>
                        </thead>
                        {sourceData.map((sourceData, i) => (
                          <tbody key={i}>
                            <tr>
                              <td>{sourceData.label}</td>
                              <td>{sourceData.value}</td>
                            </tr>
                          </tbody>
                        ))}
                      </table>
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

export default Data;
