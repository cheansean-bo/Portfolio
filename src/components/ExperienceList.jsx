
import foodykps from '../images/foody.jpg'
import sisterworks from '../images/sisterworks.png'
import aubot from '../images/aubot.jpg'

const ExperiencesList = [
    {
        "id": 0,
        "name" : "FoodyKPS",
        "img": foodykps,
        "skills": ['Python', 'Excel VBA'],
        "points": ['Efficiently implemented a catalogue system utilizing VBA automation to match thousands of product images with QR code records in excel',
            'Developed a Python script to extract restocking requirements from Excel records and efficiently manage daily communication with suppliers',
            'Designed a monthly reporting mechanism to generate insights on average sales, performance evaluation, and incentives'
        ]
    },

    {
        "id": 1,
        "name" : "SisterWorks",
        "img": sisterworks,
        "skills": ['Python', 'Slack', 'Google Script'],
        "points": ['Developed a Python-based automation auditing tool to streamline attendance tracking and generate categorized reports',
            'Created Python scripts to clean, manage and categorize large data set in preparation for migration, enabling transfer of 60% of old records from Google Sheets to Salesforce',
            'Designed and implemented Salesforce automation flows to support onboarding and offboarding processes for volunteers and interns, enhancing operation efficiency and accuracy',
            'Built and maintained 6 Slack channel management using workflows to enhance internal communication and task tracking'
        ]
    },

    {
        "id": 2,
        "name" : "Aubot",
        "img" : aubot,
        "skills": ['git', 'JS', 'debugging'],
        "points": ['Successfully contributed to improving the student portal by efficiently managing the modelling phases and improve usability',
            'Optimized curriculum structure to ensure steady progression in complexity and strategically arrange 30 lesson topics for learning efficacy',
            'Efficiently tested hundreds of APIs by validating the core API class to ensure consistent and reliable functionality across the system'
        ]
    },

]

export default ExperiencesList