# hsCookie
*A simple Cookie tool*

---

#### **Cookie.get(name)**
*获取cookie*
```
Cookie.get('name') // hisheng
```

---

#### **Cookie.all()**
*获取所有cookie*
```
Cookie.all() // {name:'hisheng',nick:'nickname'}
```

---

#### **Cookie.set(name,value,options)**
*设置cookie*
```
Cookie.set('name','hisheng',{path:'/',expires:60*20,domain:'www.github.com',secure:true})
```

---

#### **Cookie.del(name,options)**
*删除cookie*
```
Cookie.del('name',{path:'/'})
```
