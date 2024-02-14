import os 
from bs4 import BeautifulSoup
dirFrom='prebuild'
dirTo='build'
for filename in os.listdir(dirFrom):
    if filename.endswith(".html"):
        file_path = os.path.join(dirFrom, filename)
        file_to = os.path.join(dirTo, filename)
        # Load the HTML file
        with open(file_path, encoding="utf8") as file:
            html_content = file.read()

        # Create a BeautifulSoup object
        soup = BeautifulSoup(html_content, 'lxml')

        # Find the element to remove by its tag and remove it
        element_to_remove = soup.find('section', {'class': 'display-7'})
        element_to_remove.extract()

        # Print the modified HTML
        #print(soup.prettify())
        with open(file_to, "w", encoding="utf8") as f:
            f.write(soup.prettify())