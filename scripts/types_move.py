import shutil 

def types_simple_copy():
    shutil.copytree('src/types', 'dist/types')

if __name__ == "__main__":
    types_simple_copy()