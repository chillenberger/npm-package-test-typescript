import shutil 

def css_simple_copy():
    shutil.copytree('src/styles', 'dist/styles')

if __name__ == "__main__":
    css_simple_copy()