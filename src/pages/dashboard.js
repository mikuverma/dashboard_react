// App.js
import React, { useEffect, useRef, useState } from 'react';
import { Bar, Doughnut  } from 'react-chartjs-2';
import Dashboard from '../components/dashboard.js';


const Dashboard_main = () => {
    const canvasRef = useRef(null);

  // Ensure the ref is assigned to a <canvas> element before using it
  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        // You can create your chart here if needed
      }
    }
  }, []);
  const [selectedOption, setSelectedOption] = useState(''); // State to manage the selected option

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value); // Update the selected option when the user makes a choice
  };
   // Data for your doughnut chart
   const data = {
    labels: [],
    datasets: [
      {
        data: [100, 280, 200],
        backgroundColor: ["#FF6384", "#6138EA", "#F1EFFC"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#F1EFFC"],
      },
    ],
  };
  const containerStyle = {
    width: "250px", // Set your custom width
    height: "250px", // Set your custom height
  };
  const customPadding = {
    padding: "0 1vw 0 0", // Your custom padding value
  };
  const handleHover = (event, chartElements) => {
    if (chartElements[0]) {
      // Zoom-out effect by increasing the cutout percentage
      const newCutoutPercentage = 60; // Adjust this value as needed
      chartElements[0]._chart.options.cutoutPercentage = newCutoutPercentage;
      chartElements[0]._chart.update();
    }
  };
  // Additional options for the chart
  const options = {
    legend: {
      display: false,
    },
    cutout: 80, // Adjust this value for the initial thickness
    elements: {
      arc: {
        borderWidth: 0,
        onHover: handleHover, // Call the custom hover effect function
      },
    },
  };
    return (
        <div className='admin_dashboard_main'>
            <Dashboard>
                
                <div className='admin_dashboard_status'>
                    <div className="admin_dashboard_status_part1">
                    <div className='row d-flex align-items-center table_section'>
                            <div class="col-md-9 p-0">
                                <h2 className='dash_hello'>Hello Shahrukh &#128075;,</h2>
                            </div>
                            <div class="col-md-3 p-0">
                                <div class="d-flex form-inputs">
                                    <img src="../img/search.png" width={22} height={22} alt='img'/>
                                    <input class="form-control input-white" type="text" placeholder="Search" />
                                    
                                </div>
                            </div>
                           
                        </div>
                        <div className="admin_dashboard_status_part1_line1">
                            <div className='admin_dashboard_status1'>
                                <div className='admin_dashboard_status1_count'>
                                    <div className='admin_dashboard_status1_circle'>
                                    <img src="../money-saving.png" alt='img'/>
                                    </div>
                                </div>
                                <div className='admin_dashboard_status1_title'>
                                    <div className='first_content'><p>Earning</p></div>
                                    <div className='middle_content'><p>$198k</p></div>
                                    <div className='last_content'><span>37.8%</span><p>this month</p></div>
                                </div>
                            </div>
                            <div className='admin_dashboard_status2'>
                                <div className='admin_dashboard_status2_count'>
                                    <div className='admin_dashboard_status2_circle'>
                                    <img src="../note.png" alt='img'/>
                                    </div>
                                </div>
                                <div className='admin_dashboard_status2_title'>
                                <div className='first_content'><p>Orders</p></div>
                                    <div className='middle_content'><p>$2.4k</p></div>
                                    <div className='last_content'><span>2%</span><p>this month</p></div>
                                </div>
                            </div>
                            <div className='admin_dashboard_status3'>
                                <div className='admin_dashboard_status3_count'>
                                    <div className='admin_dashboard_status3_circle'>
                                    <img src="../wallet.png" alt='img'/>
                                    </div>
                                </div>
                                <div className='admin_dashboard_status3_title'>
                                <div className='first_content'><p>Balance</p></div>
                                    <div className='middle_content'><p>$2.4k</p></div>
                                    <div className='last_content'><span>2%</span><p>this month</p></div>
                                </div>
                            </div>
                            <div className='admin_dashboard_status4'>
                                <div className='admin_dashboard_status4_count'>
                                    <div className='admin_dashboard_status4_circle'>
                                    <img src="../bag.png" alt='img'/>
                                    </div>
                                </div>
                                <div className='admin_dashboard_status4_title'>
                                <div className='first_content'><p>Total Sales</p></div>
                                    <div className='middle_content'><p>$89k</p></div>
                                    <div className='last_content'><span>11%</span><p>this week</p></div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
               
                <div className='row d-flex align-items-stretch table_section'>
                    <div class="col-md-8" style={customPadding}>
                        <div className="barchart_bg">
                        <div className='row d-flex align-items-center bar_section'>
                            <div class="col-md-9">
                                <h2>Overview</h2>
                                <p className='month_earn'>Monthly Earning</p>
                            </div>
                            <div class="col-md-3">
                                <div class="d-flex form-inputs">
                                        <select value={selectedOption} onChange={handleSelectChange} className="custom-select">
                                            <option value="">Quarterly</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            <option value="option3">Option 3</option>
                                        </select>
                                    
                                </div>
                            </div>
                            
                        </div>
                            <div>
                                <Bar
                                    ref={canvasRef}  // Attach the ref to the <Bar> component
                                    data={{
                                        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Aug", "Sep", "Oct", "Nov", "Dec"],
                                        datasets: [
                                            {
                                                label: "total count/value",
                                                data: [400, 300, 550, 450, 480, 260, 480, 550, 520, 470, 440, 445],
                                                backgroundColor: ["#F2EFFF"],
                                                
                                                borderRadius: 10,
                                                borderSkipped: false,
                                            },
                                        ],
                                    }}
                                    height={325}
                                    options={{
                                        maintainAspectRatio: false,
                                        responsive: true,
                                        scales: {
                                            y: {
                                                beginAtZero:true,
                                                ticks: {
                                                    display: false
                                                },
                                                grid: {
                                                    drawOnChartArea:false,
                                                    drawBorder: false,
                                                    
                                                    display:false,
                                                  },
                                            },
                                            x: {
                                                grid: {
                                                    drawOnChartArea:false,
                                                    drawBorder: false,
                                                    display:false,
                                                   
                                                  },
                                            },
                                            
                                        },
                                        plugins: {
                                            legend: {
                                              display: false, // Hide the legend
                                            },
                                          },
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div className='doughnut-chart'>
                            <div className='row d-flex align-items-center bar_section'>
                                <div class="col-md-12">
                                    <div className='doughchart_content'>
                                        <h2>Customers</h2>
                                        <p className='month_earn'>Customers that buy products</p>
                                    </div>
                                </div>
                                <div class="col-md-12 d-flex justify-content-center">
                                    <div className="chart-container" style={containerStyle}>
                                        <Doughnut data={data} options={options} />
                                        <div className="center-text"><span>65%</span><div>Total New</div> Customers</div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                    </div>

                </div>
                 
               
                <div className='admin_dashboard_top_5_wrap admin_dashboard_top_5_wrap_2 admin_dashboard_table'>
                    <div className='admin_dashboard_top_5'>
                        <div className='row d-flex align-items-center table_section'>
                            <div class="col-md-7">
                                <h2>Product Sell</h2>
                            </div>
                            <div class="col-md-3">
                                <div class="d-flex form-inputs">
                                    <img src="../img/search.png" width={22} height={22} alt='img'/>
                                    <input class="form-control" type="text" placeholder="Search" />
                                    
                                </div>
                            </div>
                            <div class="col-md-2">
                            <div class="d-flex form-inputs">
                                        <select value={selectedOption} onChange={handleSelectChange} className="custom-select">
                                            <option value="">Last 30 days</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            <option value="option3">Option 3</option>
                                        </select>
                                    
                                </div>
                            </div>
                        </div>
                        
                        <table class="table table-hover">
                            <thead>
                                <tr className='table_heading'>
                                    <th className='pl-1' scope="col">Product Name</th>
                                    <th className='text-center' scope="col">stock</th>
                                    <th scope="col">Price</th>
                                    <th className='text-center' scope="col">Total Sales</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className='pl-1' scope="row">
                                        <div className='imgtext'>
                                        <img  src="../abstract.jpeg" width={80} alt='img'/>
                                            <div className='content_div'>
                                                <h3>Abstract 3D</h3>
                                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</span>
                                            </div>
                                        
                                        
                                        </div>
                                    
                                    </th>
                                    <td className='font_300 text-center'>32 in stock</td>
                                    <td className='font_700'>$ 45.99</td>
                                    <td className='text-center'>20</td>
                                </tr>
                                <tr>
                                    <th className='pl-1' scope="row">
                                        <div className='imgtext'>
                                            <img  src="../sarphens.jpg" width={80} alt='img'/>
                                            <div className='content_div'>
                                                <h3>Sarphens Illustration</h3>
                                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</span>
                                            </div>
                                        </div>
                                    </th>
                                    <td className='font_300 text-center'>32 in stock</td>
                                    <td className='font_700'>$ 45.99</td>
                                    <td className='text-center'>20</td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </Dashboard>
        </div>
    );
};

export default Dashboard_main;