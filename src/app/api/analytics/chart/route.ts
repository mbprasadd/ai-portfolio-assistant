import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";


export async function GET() {

  const { data, error } = await supabase
    .from("visitors")
    .select("created_at");


  if(error){
    return NextResponse.json({
      success:false,
      error:error.message
    });
  }


  const grouped:any = {};


  data.forEach((visitor)=>{

    const date = new Date(visitor.created_at)
      .toISOString()
      .split("T")[0];


    if(!grouped[date]){
      grouped[date]=0;
    }

    grouped[date]++;

  });



  const chartData = Object.keys(grouped).map(date=>({
    date,
    visitors:grouped[date]
  }));


  return NextResponse.json({
    success:true,
    data:chartData
  });

}