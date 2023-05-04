var questions = [
    {
        "title": "Reactjs",
        "question": "Given a dictionary with the property <code>property1</code> and value <code>value1</code>",
        "subText": "Add an additional property <code>property2</code> and value <code>value2</code>.",
        "stage": {"property1": "value1"},
        "answer": {"property1": "value1", "property2": "value2"}
    },
    {
        "title": "JavaScript DOM",
        "question": "Given a dictionary with the property <code>name</code> and value <code>apple</code>. Add additional properties to the dictionary.",
        "subText": "<table align='center'>  <tr>  <th>Key/Property</th>    <th>Value</th>  </tr>  <tr>    <td>name</td>    <td>apple</td>  </tr> <tr>    <td>color</td>    <td>red</td>  </tr>  <tr>    <td>weight</td>    <td>90g</td>  </tr>  </table>",
        "stage": {"name": "apple"},
        "answer": {"name": "apple", "color": "red" , "weight": "90g"}
    },
    {
        "title": "Composable Components",
        "question": " What does it mean for something to be composable?",
        "stage": {"composable":{"javascrip":"yes","react":"yes","angular":"no"}},
        "answer": {"composbale": {"javascrip": "yes"}}
    
    },
    {
        "title": "Declarative UI",
        "question": "Now try adding the address information. Note the address is a dictionary",
        "subText": "<table align='center'>  <tr>  <th>Key/Property</th>    <th>Value</th>  </tr>  <tr>    <td>name</td>    <td>john</td>  </tr> <tr>    <td>gender</td>    <td>male</td>  </tr>  <tr>    <td>age</td>    <td>24</td>  </tr> <tr>    <td> address </td>    <td> <table align='center'>  <tr>  <th>Key/Property</th>    <th>Value</th>  </tr>  <tr>    <td>city</td>    <td>edison</td>  </tr> <tr>    <td>state</td>    <td>new jersey</td>  </tr>  <tr>    <td>country</td>    <td>united states</td>  </tr>  </table> </td>  </tr>  </table>",
        "stage": {"employee":{"name":"john","gender":"male","age":24}},
        "answer": {"employee":{"name":"john","gender":"male","age":24,"address":{"city":"edison","state":"new jersey","country":"united states"}}}
    },
    {
        "question": "Given an array of apples. Add a new apple to the list to make it a total of 4.",
        "title": "List/Array",
        "stage": ["apple", "apple", "apple"],
        "answer": ["apple", "apple", "apple", "apple"]
    },
    {
        "title": "Imprerative UI",
        "question": "We would like to add additional details for each item, such as color, weight etc. We have updated the first one for you. Similarly modify the remaining items to match the below data.",
        "subText": "<table align='center'>  <tr>    <th>Fruit</th>    <th>Color</th>    <th>Weight</th>  </tr>  <tr>    <td>apple</td>    <td>red</td>    <td>100g</td>  </tr>  <tr>    <td>apple</td>    <td>red</td>    <td>90g</td>  </tr>  <tr>    <td>mango</td>    <td>yellow</td>    <td>150g</td>  </tr></table>",
        "stage": [{"name":"apple","color":"red","weight":"100g"},"apple","mango"],
        "answer": [{"name":"apple","color":"red","weight":"100g"},{"name":"apple","color":"red","weight":"90g"},{"name":"mango","color":"yellow","weight":"150g"}]
    },
    {
        "title": "CONGRATULATIONS!!!",
        "question": "You have successfully completed the quiz!",
        "subText": "",
        "stage": {"employee":{"name":"john","gender":"male","age":24,"address":{"city":"edison","state":"new jersey","country":"united states"},"payslips":[{"month":"june","amount":1400},{"month":"july","amount":2400},{"month":"august","amount":3400}]}},
        "answer": {"employee":"sdfsdfsd"}
    }
]