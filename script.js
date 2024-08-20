// a proram to display rechargable options on the airtel mobile network

const input = prompt("Enter your subscription code");
const code = "*312#";

if (input === code ){
    const enterPlan = +prompt(`Choose data Plan: 
          1 My Offer 
          2 Data plan
          3 N5000/18GB
          4 N3000/10GB
          5 N1500/5GB
          6 N500/2GB
          7 SMART DATA PLANS 
          * NEXT `);

          if (enterPlan === 1){
            const MyOffer = +prompt(`My Airtel offer:
                 1. N500/2.5GB/2days
                 2. N1000/5GB/14days
                 3. MORE DATA OFFER
                 4. VOICE OFFER
                 5.RECCHARGE OFFER`);

        if (MyOffer === 1){
            console.log("you have subscribed for 2.5GB for 2 days ");
        }
        else if(MyOffer === 2){
            console.log("you have subscribed for 5GB for 14days");
        }
        else if(MyOffer === 3){
            console.log("you have opened the more data option");
        }
        else if(MyOffer === 4){
            console.log("you have opened the voice plan option")
        }
        else{
            console.log("Invalid selection")
        }         
}
 else if( enterPlan === 2){
 const plans = +prompt(`choose plan: 
        1.Daily/weekly Bundles
        2. Weekly bundles
        3. monthly bundles 
       `);

        if(plans === 1){
            const dailyPlan = +prompt(`choose daily plan: 
                1 N50/40MB/daily
                2. N100/100MB daily
                3. N200/200MB/3 days
                4. N350/350MB/7 days
                5. N500/750MB/7days
                6 N350/1GB/daily
                7 N500/ 2GB/daily `);

                if(dailyPlan === 1){
                    console.log("you have subscribed for 50MB for one day");
                }
                else if(dailyPlan === 2){
                    console.log("you have subscribed for 100MB for three days");
                }
                else if(dailyPlan === 3){
                    console.log("you have subscribed for 200MB for 3 days");
                }
                else if(dailyPlan === 4){
                    console.log("you have subscirbed for 350MB for seven days");
                }
                else if(dailyPlan === 5){
                    console.log("you have subscribe for 750MB for one day");
                }
                else if(dailyPlan === 6 ){
                    console.log("you have subscribed for 1GB for one day ");
                }
                else if(dailyPlan === 7){
                    console.log("you have subscribed for 2GB for one day")
                }

                else{
                    console.log("Invalid Daily Plan");
                }

                

        }
        else if(plans === 2){
            const weeklyPlans = +prompt(`choose weekly plan: 
                1. N500/750MB/7days
                2. N500/1GB/7days
                3. N1500/5GB/7days 
                4. N350/350MB/7days 
                5. N100/All social/ 5 days
                `);

                if(weeklyPlans === 1){
                    console.log("you have subsribed for 750MB for seven days");
                }
                else if(weeklyPlans === 2){
                     console.log("you have subscribed for 1GB for seven days");
                }
                else if(weeklyPlans === 3){
                    console.log("you have subscibed for 5Gb for seven days ");
                }
                else if(weeklyPlans === 4){
                    console.log("you have subscribed for 350MB for seven days");
                }
                else if(weeklyPlans === 5){
                    console.log("you have subscribed for all social networks for the next 5days");
                }
                else{
                    console.log("Invalid Weekly Plan ");
                }
        }
        else if(plans == 3){
            const MonthlyPlans = +prompt(`choose Monthly plan:
                1. N1000/1.2Gb
                2. N1200/1.5GB
                3. N1500/3GB
                4. N2000/4.5Gb
                5. N2500/6Gb
                6. N3000/10GB/30 days`);

                if(MonthlyPlans === 1){
                    console.log("congratulations you have subscribed for 1.2Gb");
                }
                else if(MonthlyPlans === 2){
                    console.log("congratulations you have subscribed for 1.5GB");
                }
                else if(MonthlyPlans === 3){
                    console.log("congratulations you have subscribed for 3Gb");
                }
                else if (MonthlyPlans === 4){
                    console.log("congratulations you have subscribed for 4.5Gb");
                }
                else if(MonthlyPlans === 5){
                    console.log("congratulations you have subscribed for 6GB");
                }
                else if(MonthlyPlans === 6){
                    console.log("congratulations you have subscribed for 10Gb for 30 days");
                }
                else{
                    console.log("Invalid Monthly Selection")
                }
        }

        else{
            console.log("invalid subscription");
        }

        }
else if(enterPlan === 3){
    console.log("Congratulations you have subscribed for 18GB");
}

else if(enterPlan === 4){
    console.log("congratulations you have subscribed for 20GB");
}
else if(enterPlan === 5){
    console.log("congratulations you have subscribed for 5Gb");
}
else if(enterPlan === 6){
    console.log("congratulations you have subscribed for 2GB");
}

else if(enterPlan === 7){
    const smartDataPlans = +prompt(`choose your Smart Data Plan:
        1. N400/1.5GB
        2. N800/3.5GB
        3. N600/1GB
        4. N1000/1.5GB`);

        if( smartDataPlans === 1){
            console.log("you have subscribed for 1.5Gb at 400  naira")
        }
        else if(smartDataPlans === 2){
            console.log("you have subscribed for 3.5GB at 800 naira");
        }
        else if(smartDataPlans === 3){
            console.log("you have subscribed for 1GB at 600 naira");
        }
        else if(smartDataPlans === 4){
            console.log("you have subscribed for 1.5Gb at 1000 naira");
        }
        else{
            console.log("Invalid Smart data plan!!");
        }
}

    
}

else{
    console.log("Invalid code!!!");
}


// tenary operators : this is like a subsittue for if else statement, but you cannot replace the if and else statement.

