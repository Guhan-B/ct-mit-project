new Vue({
    el: '#app',
    data: {
        nonFundedSearchName: '',
        nonFundedSearchYear: '',
        fundedSearchName: '',
        onGoingFunded: [
            {
                name: 'DST - FIST 2014',
                fund: 'Funded by Ministry of Science and Technology, Govt. of India',
                amt: 'Amount: 47 Lakhs',
                img: 'assets/img/holder.jpg'
            },
            {
                name: 'Efficient Managment of Resources in Cloud',
                fund: 'Funded by UGC',
                amt: 'Amount: 15 Lakhs',
                img: 'assets/img/holder.jpg'
            },
            {
                name: 'Efficient Handoff of and Authentication Schems for QOS Enhancement in IEEE 802.16m for 4G Networks',
                fund: 'Funded by DST',
                amt: 'Amount: 10 Lakhs',
                img: 'assets/img/holder.jpg'
            },
        ],
        completedFunded: [
            {
                name: 'Development of Trust Component for Secured Commercial Grid Services',
                fund: 'Funded by DIT-MCIT New Delhi',
                amt: 'Amount: 45 Lakhs',
                img: 'assets/img/holder.jpg'
            },
            {
                name: 'Missile Defense and Interceptor Allocation by RBF Neural Networks',
                fund: 'Funded by DRDO New Delhi',
                amt: 'Amount: 11 Lakhs',
                img: 'assets/img/holder.jpg'
            },
            {
                name: 'Development of Trust Component for Secured Commercial Grid Services',
                fund: 'Funded by DIT-MCIT New Delhi',
                amt: 'Amount: 45 Lakhs',
                img: 'assets/img/holder.jpg'
            },
            {
                name: 'Development of front end tools for Grid Services',
                fund: 'Funded by CDAC Bangalore',
                amt: 'Amount: 18 Lakhs',
                img: 'assets/img/holder.jpg'
            },
            {
                name: 'Development of Knowledge Based Wind Tunnel test Data Management System',
                fund: 'Funded by DRDL Hyderabad',
                amt: 'Amount: 9.9 Lakhs',
                img: 'assets/img/holder.jpg'
            },
            {
                name: 'Design and Development of enhanced OS for a flow solver series of parallel processor having flow switch',
                fund: 'Funded by CSIR New Delhi',
                amt: 'Amount: 15 Lakhs',
                img: 'assets/img/holder.jpg'
            },
        ],
        onGoing: [
            {
                name: 'Intelligent Activity Recognition system for Video Surveillance Applications',
                scholar: 'Ms.D.Sowmiya',
                guide: 'Dr.P.Anandhakumar',
                year: 'January 2012',
                img: 'assets/img/holder.jpg'
            },
            {
                name: 'Hybrid Recommeder System for Adaptive Personalized Learning',
                scholar: 'MP.Karthikeyan',
                guide: 'Dr.S.ThamaraiSelvi',
                year: 'July 2012',
                img: 'assets/img/holder.jpg'
            },
            {
                name: 'A Service Oriented Approach For Improving The Data Mining Process To Optimize The Retrieval Of On-Demand Service',
                scholar: 'Praveen Joe I.R',
                guide: 'Varalakshmi P',
                year: 'January 2013',
                img: 'assets/img/holder.jpg'
            },
            {
                name: 'Enhancing A Secured Cloud Information Framework',
                scholar: 'Thangavel M',
                guide: 'Varalakshmi P',
                year: 'July 2013',
                img: 'assets/img/holder.jpg'
            },
            {
                name: 'A Survival Based Authentication By User Pattern Mining Mechanism In Ngn',
                scholar: 'A Rajakumar',
                guide: 'Gunasekaran R',
                year: 'July 2013',
                img: 'assets/img/holder.jpg'
            },
            {
                name: 'Human Behavior Analysis for Video Surveillance',
                scholar: 'Ms.P.Sathiya',
                guide: 'Dr.P.AnandhaKumar',
                year: 'January 2014',
                img: 'assets/img/holder.jpg'
            },
            {
                name: 'Adaptive Cloud Based Hybrid Multimedia recommendation for Cyber Physical syste',
                scholar: 'Ms.S.Ephina Thendral',
                guide: 'Dr.C.Valliyammai',
                year: 'June 2014',
                img: 'assets/img/holder.jpg'
            },
            {
                name: 'Nodule Volumetry And Detection Of Small Nodules For Lung Cancer Screening',
                scholar: 'Ms.G. Janaka Sudha',
                guide: 'Dr.P. Jayashree',
                year: 'January 2015',
                img: 'assets/img/holder.jpg'
            },
            {
                name: 'Abnormalities of Event detection and recovery using Online Social Networks',
                scholar: '. A. Bhuvaneswari',
                guide: 'Dr.C.Valliyammai',
                year: 'July 2015',
                img: 'assets/img/holder.jpg'
            },
            {
                name: 'Effective filtering of Unsolicited messages from E-mails and from Online Social Networks',
                scholar: 'Ms. Cinu C Kiliroor',
                guide: 'Dr.C.Valliyammai',
                year: 'July 2015',
                img: 'assets/img/holder.jpg'
            },
            {
                name: 'Predictive analytics in BigData',
                scholar: 'Mr.S.Karthik',
                guide: 'Dr.P.Anandhakumar',
                year: 'January 2016',
                img: 'assets/img/holder.jpg'
            },
            {
                name: 'Enhancing cloud storage service for BigData',
                scholar: 'Ms.R.N.Karthika',
                guide: 'Dr.C.Valliyammai',
                year: 'January 2016',
                img: 'assets/img/holder.jpg'
            },
            {
                name: 'FCM-Q01 for online learning users',
                scholar: 'Ms.R.Naga Priyadharsini',
                guide: 'Dr.S.ThamaraiSelvi',
                year: 'July 2016',
                img: 'assets/img/holder.jpg'
            },
            {
                name: 'Uncertainty Analysis In Social Networking',
                scholar: 'Mr.Prakash M',
                guide: 'Dr. P. Pabitha',
                year: 'January 2017',
                img: 'assets/img/holder.jpg'
            },
            {
                name: 'Energy aware security framework for IoT',
                scholar: 'Ms.Lakshmipriya S',
                guide: 'Dr.P.Jayashree',
                year: 'January 2017',
                img: 'assets/img/holder.jpg'
            },
            {
                name: 'Diagnostic Support System to Detect Brain Abnormalities',
                scholar: 'Ms.Brindha V',
                guide: 'Dr.P.Jayashree',
                year: 'January 2017',
                img: 'assets/img/holder.jpg'
            },
            {
                name: 'Distributed Data Analytics Of Health Care Record Using Fog Computing',
                scholar: 'Ms.Rajalakshmi S',
                guide: 'Dr. P. Pabitha',
                year: 'July 2017',
                img: 'assets/img/holder.jpg'
            },
            {
                name: 'Energy Efficient Learning Mechanism For Load Balancing In Software Defined Next Generation Networksa',
                scholar: 'Ms.Sahaya Beni Prathiba B',
                guide: 'Dr.R.Gunasekaran',
                year: 'July 2017',
                img: 'assets/img/holder.jpg'
            },
            {
                name: 'Effective Resource Allocation In M2M Communication Using Machine Learning Techniques For Next Generation Networks',
                scholar: 'Ms.Archana Ri',
                guide: 'Dr. Kathiroli R',
                year: 'July 2017',
                img: 'assets/img/holder.jpg'
            },
        ]
    },
    computed: {
        searchOnGoingFunded() {
            if (this.fundedSearchName) {
                return this.onGoingFunded.filter((item) => {
                    return this.fundedSearchName.toLowerCase().split(' ').every(v => item.name.toLowerCase().includes(v))
                })
            }
            else{
                return this.onGoingFunded
            }
        },
        searchCompletedFunded() {
            if (this.fundedSearchName) {
                return this.completedFunded.filter((item) => {
                    return this.fundedSearchName.toLowerCase().split(' ').every(v => item.name.toLowerCase().includes(v))
                })
            }
            else{
                return this.completedFunded
            }
        },
        searchOnGoing() {
            if(this.nonFundedSearchName){
                return this.onGoing.filter((item) => {
                    return this.nonFundedSearchName.toLowerCase().split(' ').every(v => item.name.toLowerCase().includes(v))
                })
            }
            else{
                return this.onGoing
            }
        }
    }
})