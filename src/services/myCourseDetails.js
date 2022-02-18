const myCourses =[
    {"_id": "class_1",
    "id": "CSE1001",
    "name": "DBMS",
    "teacher": "Ms. Sandhya",
    "time":  "15:30:00"
    },

    {"_id": "class_2",
    "id": "CSE1002",
    "name": "DSA",
    "teacher": "Ms. Elma",
    "time": "12:30:00"
    },

    {"_id": "class_3",
    "id": "CSE1003",
    "name": "OOPS",
    "teacher": "Ms. Kanisha",
    "time":  "9:20:00"
    },

    {"_id": "class_4",
    "id": "CSE1001",
    "name": "DBMS",
    "teacher": "Mr Selva",
    "time": "13:20:00"
    },

    {"_id": "class_5",
    "id": "CSE1002",
    "name": "DSA",
    "teacher": "Mr. John",
    "time":"10:30:00"
    }
];




export function getMyCourses() {
    return myCourses;
}