import time

class Source:
    def request(self):
        time.sleep(10)
        return 100

    def main_function(self):
        response = self.request()
        return response

    def reverse_str(self, initial_string):
        final_string = ''
        index = len(initial_string)
        while index > 0:
            final_string += initial_string[index - 2]
            index = index - 1
        return final_string