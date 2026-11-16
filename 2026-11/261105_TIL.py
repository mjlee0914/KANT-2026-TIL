from datetime import date

class Human:
    def __init__(self, name: str, age: int):
        self.name = name
        self.age = age

    # instance method
    def description(self):
        return f'my name is {self.name} and I am {self.age} years old.'

    @classmethod # 새로운 객체 반환
    def age_from_year(cls, name: str, birth_year: int):
        age = cls.my_age(birth_year)
        return cls(name, age)
    
    @staticmethod
    def my_age(birth_year: int):
        current_year: int = date.today().year
        return current_year - birth_year
    
if __name__ == '__main__':
    saurav = Human.age_from_year('saurv', 1999)
    print(saurav.description())



mj = Human("mj", 10)
mj = mj.age_from_year('mj',2000)
print(mj.description())