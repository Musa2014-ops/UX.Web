
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for reaching out! We will get back to you soon.");
  });
  
  // This function displays certian dietary Appraches
  function showDietApproaches(diet) {
    let recommendations = '';
    
    if (diet === 'gluten-free') {
      approaches = '<ol><li>Quinoa Salad with Roasted Vegetables</li><li>Gluten-Free Pancakes</li><li>Avocado and Chickpea Toast</li></ul>';
    } else if (diet === 'vegan') {
      approaches = '<ol><li>Vegan Burrito with Tofu</li><li>Chickpea Salad Sandwich</li><li>Vegan Pasta Primavera</li></ul>';
    } else if (diet === 'keto') {
      approaches = '<ol><li>Zucchini Noodles with Pesto</li><li>Grilled Chicken with Avocado</li><li>Eggplant Pizza</li></ul>';
    } else if (diet === 'paleo') {
      approaches = '<ol><li>Grilled Salmon with Sweet Potatoes</li><li>Paleo Chicken Salad</li><li>Roasted Vegetables with Garlic</li></ul>';
    } else if (diet=== 'meditarranean') {
      approaches = '<ol><li>Fresh Fruits with Vegetables</li><li>Beans with Lentils</li><li>Red Meat</li>';
    } else if (diet=== 'intermittent fasting') {
        approaches = '<ol><li>Olive oil with Avocados</li><li>Poultry</li><li>Nuts and Seeds </li>';  
    } else {
      approaches = 'Please choose a suitable dietary preference.';
    }
  
    document.getElementById(dietApproaches)
  
}