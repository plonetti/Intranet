"""
- utilizzo dei packages BeautifulSoup e shutil
- per ogni file html presente nela cartella preBuild
  viene rimosso il tag section con una classe specifica
- il file ripulito viene poi copiato nella cartella build
- per ogni file immagine presente nella cartella prebuild/assets/images
  viene effettuata una copia nella rispettiva cartella build/assets/images
"""
import os 
import shutil
from bs4 import BeautifulSoup
dirFrom='prebuild'
dirTo='build'
dirFromImages='prebuild/assets/images'
dirToImages='build/assets/images'
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

        # Write a copy of the modified HTML
        with open(file_to, "w", encoding="utf8") as f:
            f.write(soup.prettify())

for filename in os.listdir(dirFromImages):
    file_path_img = os.path.join(dirFromImages, filename)
    file_to_img = os.path.join(dirToImages, filename)
    shutil.copy(file_path_img, file_to_img)