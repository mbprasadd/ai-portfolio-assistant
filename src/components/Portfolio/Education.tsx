import React from 'react'

export const Education = () => {
  return (
      <section id="education" className="py-10 md:py-16 relative overflow-hidden text-white bg-cover bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/dbuak9u4o/image/upload/v1783262283/My%20Portfolio/Education-Bg.jpg')" }}>
          <div className="max-w-[1120px] mx-auto px-7">
              
              {/* HEADER */}
              <div className="mb-5 md:mb-10">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-1">Educat<span className="text-[#E4232F]">ion</span></h2>
                  <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-[#E4232F]">06</span>
                      <div className="h-px w-56 bg-gradient-to-r from-[#E4232F] to-transparent"></div>
                   </div>
              </div>

              { /* Desktop Table */}
              <table className="w-full hidden md:table border-collapse rounded-2xl overflow-hidden shadow-[0_10px_30px_-22px_rgba(0,0,0,0.35)]">
                  <tbody>
                      <tr className="border-b border-[#F3CDD1] hover:bg-[#E4232F]/[0.08] transition-colors">
                          <td className="px-6 py-4 text-[14.5px] font-bold w-[38%]">Master of Computer Applications (MCA)</td>
                          <td className="px-6 py-4 text-[14.5px] text-[#7A7473]">SD College of Information Technology, Tanuku</td>
                          <td className="px-6 py-4 text-[13px] font-['JetBrains_Mono'] font-semibold text-[#E4232F] text-right whitespace-nowrap">2022 – 2024</td>
                      </tr>
                      <tr className="border-b border-[#F3CDD1] hover:bg-[#E4232F]/[0.08] transition-colors">
                          <td className="px-6 py-4 text-[14.5px] font-bold w-[38%]">Bachelor of Science (B.Sc.)</td>
                          <td className="px-6 py-4 text-[14.5px] text-[#7A7473]">Sri Sai Siddhartha Degree College, Gajapathinagaram</td>
                          <td className="px-6 py-4 text-[13px] font-['JetBrains_Mono'] font-semibold text-[#E4232F] text-right whitespace-nowrap">2019 – 2022</td>
                      </tr>
                      <tr className="border-b border-[#F3CDD1] hover:bg-[#E4232F]/[0.08] transition-colors">
                          <td className="px-6 py-4 text-[14.5px] font-bold w-[38%]">Intermediate — MPC</td>
                          <td className="px-6 py-4 text-[14.5px] text-[#7A7473]">Sri Sai Junior College, Tanuku</td>
                          <td className="px-6 py-4 text-[13px] font-['JetBrains_Mono'] font-semibold text-[#E4232F] text-right whitespace-nowrap">2016 – 2018</td>
                      </tr>
                      <tr className="hover:bg-[#E4232F]/[0.08] transition-colors">
                          <td className="px-6 py-4 text-[14.5px] font-bold w-[38%]">SSC</td>
                          <td className="px-6 py-4 text-[14.5px] text-[#7A7473]">ZPHS Boy's High School, Tanuku</td>
                          <td className="px-6 py-4 text-[13px] font-['JetBrains_Mono'] font-semibold text-[#E4232F] text-right whitespace-nowrap">2015 – 2016</td>
                      </tr>
                  </tbody>
              </table>
              
              { /* Mobile Table */}
              <div className="md:hidden">
                {[
                    {
                        degree: "Master of Computer Applications (MCA)",
                        college: "SD College of Information Technology, Tanuku",
                        year: "2022 – 2024",
                    },
                    {
                        degree: "Bachelor of Science (B.Sc.)",
                        college: "Sri Sai Siddhartha Degree College, Gajapathinagaram",
                        year: "2019 – 2022",
                    },
                    {
                        degree: "Intermediate — MPC",
                        college: "Sri Sai Junior College, Tanuku",
                        year: "2016 – 2018",
                    },
                    {
                        degree: "SSC",
                        college: "ZPHS Boy's High School, Tanuku",
                        year: "2015 – 2016",
                    },
                ].map((item, index) => (
                <div key={index} className="border-b last:border-b-0 border-[#F3CDD1] p-5 hover:bg-[#E4232F]/10 transition">
                    <h3 className="font-semibold text-base"> {item.degree} </h3>
                    <p className="mt-2 text-sm text-[#A7A7A7]"> {item.college} </p>
                    <p className="mt-1 text-sm font-mono font-semibold text-[#E4232F]"> {item.year} </p>
                </div>
                ))}
              </div>
          </div>
      </section>
  )
}
